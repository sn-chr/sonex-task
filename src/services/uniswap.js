const { request } = require('graphql-request');
const { UNISWAP_SUBGRAPH_URL } = require('../config');
const { getAllTokensQuery } = require('../graphql/queries');

const fetchAllTokens = async () => {
  const tokens = [];
  let skip = 0;
  const limit = 18; // Number of tokens to fetch in each request

  while (true) {
    const data = await request(UNISWAP_SUBGRAPH_URL, getAllTokensQuery, {
      first: limit,
      skip: skip,
    });

    console.log(data.tokens.length)
    // If no more tokens are returned, break the loop
    if (data.tokens.length === 0) break;

    // Add fetched tokens to the array
    tokens.push(...data.tokens);
    skip += limit; // Move to the next batch
  }

  console.log(`Fetched ${tokens.length} tokens.`);
  tokens.forEach((token, index) => {
    console.log(
      `${index + 1}. ${token.name} (${token.symbol}) - Address: ${token.id}, Volume (USD): $${parseFloat(token.volumeUSD).toFixed(2)}`
    );
  });

  return tokens;
};

module.exports = { fetchAllTokens };
