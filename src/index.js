const { fetchAllTokens } = require('./services/uniswap');

const main = async () => {
  try {
    await fetchAllTokens();
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

main();
