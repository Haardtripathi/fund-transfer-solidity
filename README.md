# FundTransfer

FundTransfer is a Solidity-based smart contract project designed to facilitate fund transfers on the Ethereum blockchain. Utilizing Hardhat for development, Chainlink Data Feeds for real-time USD conversion, and Ethers.js for blockchain interactions, this project is deployed on the Sepolia testnet.

## Project Overview

The FundTransfer smart contract allows users to:

1. Deploy the contract to the Sepolia testnet.
2. Add funds to the contract with a minimum threshold of 50 USD.
3. Equally distribute the funds among a list of provided addresses.

## Features

-   **Solidity Smart Contracts**: Written in Solidity for secure and efficient fund management.
-   **Chainlink Data Feeds**: Used to convert and validate the USD amount.
-   **Hardhat**: Provides a robust development environment for compiling, deploying, and testing.
-   **Ethers.js**: Facilitates interaction with the Ethereum blockchain.
-   **Interfaces and Libraries**: Utilized to ensure modular and reusable code.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm (v6 or higher)
-   Hardhat
-   An Infura or Alchemy API key for Sepolia

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

    Update the `hardhat.config.js` file with your Sepolia network settings and Chainlink API credentials.

4. Compile the smart contract:

    ```sh
    npx hardhat compile
    ```

5. Deploy the smart contract:

    ```sh
    npx hardhat run scripts/deploy.js --network sepolia
    ```

6. Add funds and distribute:

    Use the provided scripts or build a frontend interface to interact with the contract, ensuring that a minimum of 50 USD is added and then distributed equally among the specified addresses.

## Testing

Run the tests using:

```sh
npx hardhat test
```
