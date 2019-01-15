import * as fs from "fs";
import gql from "graphql-tag";

import { stripIndent } from "common-tags";

async function main() {
  console.log("Start Generating Queries...");

  // List files in "./src/query" folder
  const queryFolder = `${process.cwd()}/src/queries`;
  const files = fs.readdirSync(`${process.cwd()}/src/queries`).filter(f => f.endsWith(".graphql"));

  const queryMethods: string[] = [];

  for (const file of files) {
    const graphqlPath = `${queryFolder}/${file}`;
    const graphql = fs.readFileSync(graphqlPath).toString();
    const gqlTag = gql(graphql);

    for (const query of gqlTag.definitions) {
      const queryHasVariable = query.variableDefinitions.length > 0;
      const queryName = query.name.value;

      queryMethods.push(
        (() => {
          if (queryHasVariable) {
            return `
          private ${queryName}Gql = ${JSON.stringify(gqlTag)} as any;
          public async ${queryName}(variables: Types.${queryName}Variables) {
            return await this.queryClient.query<Types.${queryName}>({ query: this.${queryName}Gql, variables });
          }
            `;
          } else {
            return `
          private ${queryName}Gql = ${JSON.stringify(gqlTag)} as any;
          public async ${queryName}() {
            return await this.queryClient.query<Types.${queryName}>({ query: this.${queryName}Gql });
          }
            `;
          }
        })()
      );
    }
  }

  // Create /src/queries/index.ts
  fs.writeFileSync(
    `${queryFolder}/index.ts`,
    (() => {
      return stripIndent`
        import { ApolloClient } from "apollo-client";

        import * as Types from "./types";

        export abstract class Queries<T> {
          abstract get queryClient(): ApolloClient<T>
          // tslint:disable
          ${queryMethods.join("")}
          // tslint:enable
        }

      `;
    })(),
  );
}

main();
