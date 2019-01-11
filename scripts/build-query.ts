import * as fs from "fs";
import gql from "graphql-tag";

async function main() {
  console.log("Start Generating Queries...");

  // List files in "./src/query" folder
  const queryFolder = `${process.cwd()}/src/queries`;
  const files = fs.readdirSync(`${process.cwd()}/src/queries`).filter(f => f.endsWith(".graphql"));

  for (const file of files) {
    const graphqlPath = `${queryFolder}/${file}`;
    const tsPath = `${queryFolder}/${file.replace(".graphql", ".ts")}`;
    const graphql = fs.readFileSync(graphqlPath).toString();

    const query = gql(graphql).definitions[0];
    const queryHasVariable =
    const queryName = query.definitions[0].name.value;
    console.log(JSON.stringify(query, null, 2));

    fs.writeFileSync(
      tsPath,
`import gql from "graphql-tag";
import { ApolloClient } from 'apollo-client';

import { ${queryName}, ${queryName}Variables } from "./__generated__/${queryName}";

export async function ${queryName}(
  client: ApolloClient<any>,
  variables: ${queryName}Variables
) {
  return await client.query<${queryName}>({
    query: ${JSON.stringify(query)},
    variables,
  });
}`
    )

  }
}

main();
