import { ApolloClient } from 'apollo-client';

import * as Types from "./types";

export abstract class Queries<T> {
  constructor() {}

  abstract get queryClient(): ApolloClient<T>
  
  private getUserCertificationsGql = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserCertifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"encryptedEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"certifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"encryptedWinnerEmails"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"encryptedEmail"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"winnerName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"badge"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":398}} as any;
  public async getUserCertifications<T>(client: ApolloClient<T>, variables: Types.getUserCertificationsVariables) {
    return await client.query<Types.getUserCertifications>({ query: this.getUserCertificationsGql, variables });
  }
    
  private getUsersCertificationsGql = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsersCertifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"encryptedEmails"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"certifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"encryptedWinnerEmails"},"value":{"kind":"Variable","name":{"kind":"Name","value":"encryptedEmails"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"winnerName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"badge"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":402}} as any;
  public async getUsersCertifications<T>(client: ApolloClient<T>, variables: Types.getUsersCertificationsVariables) {
    return await client.query<Types.getUsersCertifications>({ query: this.getUsersCertificationsGql, variables });
  }
    
}