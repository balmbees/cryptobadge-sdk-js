// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import fetch from 'node-fetch';

// const httpLink = createHttpLink({
//   uri: "https://api.sandbox.cryptobadge.app/graphql",
//   headers: {
//     "open-api-access-token": "e14iZBK0JxUAygKd",
//   },
//   fetch: fetch as any,
// });

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: httpLink,
// });

// import gql from "graphql-tag";

// import { getMyBadges } from "./queries/__generated__/getMyBadges";

// const query = gql`
//   query getMyBadges {
//     me {
//       badges(first: 100) {
//         edges {
//           cursor
//           node {
//             id
//             name
//             backgroundColor
//             imageUrl
//             resourceUrl
//             path
//             description
//             criteria
//           }
//         }
//         pageInfo {
//           hasPreviousPage
//           hasPreviousPage
//         }
//       }
//     }
//   }
// `;
// console.log("Query : ", query);

// client.query<getMyBadges>({
//   query
// }).then((res) => {
//   console.log(res.data.me!.badges);
// });
