# FundTransfer

FundTransfer is a simple smart contract project that demonstrates basic fund transfer operations on the Ethereum blockchain. This project is built using Solidity for smart contract development, Hardhat for local Ethereum development, Ethers.js for interacting with the Ethereum network, and deployed on the Sepolia testnet.

## Project Overview

The FundTransfer project allows you to:

-   Deploy a smart contract to the Sepolia testnet.
-   Transfer funds between addresses.
-   View the balance of an address.

## Technologies Used

-   **Solidity**: Programming language for writing smart contracts.
-   **Hardhat**: Development environment to compile, deploy, test, and debug Solidity contracts.
-   **Ethers.js**: Library for interacting with the Ethereum blockchain.
-   **Sepolia Testnet**: Ethereum test network used for deployment and testing.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm (v6 or higher)
-   Hardhat

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/FundTransfer.git
    cd FundTransfer
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Configure Hardhat:

    Ensure that your Hardhat config file (`hardhat.config.js`) is set up for the Sepolia testnet. You can use the following sample configuration:

    ```javascript
    require("@nomiclabs/hardhat-ethers")

    module.exports = {
        solidity: "0.8.4",
        networks: {
            sepolia: {
                url: `https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID`,
                accounts: [`0x${YOUR_PRIVATE_KEY}`],
            },
        },
    }
    ```

    Replace `YOUR_INFURA_PROJECT_ID` and `YOUR_PRIVATE_KEY` with your own Infura project ID and private key.

### Usage

1. Compile the smart contract:

    ```sh
    npx hardhat compile
    ```

2. Deploy the smart contract to Sepolia:

    ```sh
    npx hardhat run scripts/deploy.js --network sepolia
    ```

3. Interact with the deployed contract using a script or through a frontend application. Check out the `scripts` directory for examples.
