require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const ALCHEMY_API = process.env.ALCHEMY_API;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_API,
      accounts: [PRIVATE_KEY],
    },
  },
};