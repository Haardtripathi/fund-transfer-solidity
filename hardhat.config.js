require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomicfoundation/hardhat-ethers");

// require("hardhat-gas-reporter")


/** @type import('hardhat/config').HardhatUserConfig */


const SEPOLIA_RPC_URL=process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY

module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url:SEPOLIA_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:11155111,
      
    },
  },
  // gasReporter:{
  //   enabled:true,
  //   outputFile:"gas-report.txt",
  //   noColors:true,
  //   currency:"USD",
  //   coinmarketcap:COINMARKETCAP_API_KEY,
  //   gasPriceApi: `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${ETHERSCAN_API_KEY}`,
  // } 
};
