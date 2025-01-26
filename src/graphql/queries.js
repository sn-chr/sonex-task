const { gql } = require('graphql-request');

const getAllTokensQuery = gql`
  query($first: Int!, $skip: Int!) {
    tokens(first: $first, skip: $skip) {
      id
      symbol
      name
      volumeUSD
    }
  }
`;

module.exports = { getAllTokensQuery };
