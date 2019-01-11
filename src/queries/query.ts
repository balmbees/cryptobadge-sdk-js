import gql from "graphql-tag";
import { ApolloClient } from 'apollo-client';

import { getUserCertifications, getUserCertificationsVariables } from "./__generated__/getUserCertifications";

const query = gql`
  query getUserCertifications(
    $count: Int, $encryptedEmail: String!
  ) {
    certifications(first: $count, encryptedWinnerEmails: [$encryptedEmail]) {
      edges {
        cursor
        node {
          id
          state
          winnerName

          badge {
            id
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export async function getUserCertifications(
  client: ApolloClient<any>,
  variables: getUserCertificationsVariables
) {
  return await client.query<getUserCertifications>({
    query,
    variables,
  });
}
