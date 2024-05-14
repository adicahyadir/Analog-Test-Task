# Analog Deploy SC

This repository contains code and instructions for deploying and interacting with a smart contract using Analog's GMP (Generic Messaging Protocol). Follow the steps below to set up your environment, deploy the contract, and send a message using the GMP gateway contract.

## Prerequisites

1. **Sign Up for Analog Testnet:**
   - Register at: [Analog Testnet Signup](https://testnet.analog.one/#/?signup&referral=ECK634)

2. **Development Environment:**
   - Use [Remix Ethereum IDE](https://remix.ethereum.org/) for smart contract development and deployment.

## Code

1. **Counter Contract:**
   - You can find the example Counter contract code here: [Counter.sol](https://github.com/Analog-Labs/analog-gmp-examples/blob/main/examples/simple/Counter.sol)

2. **Analog GMP Documentation:**
   - Refer to the documentation to implement the IGMPReceiver interface: [Analog GMP Developer's Guide](https://docs.analog.one/documentation/developers/analog-gmp/developers-guide/getting-started#implement-the-igmpreceiver-interface-into-your-asc)

## Gateway Address

- The supported networks and their respective gateway addresses can be found here: [Analog GMP Supported Networks](https://docs.analog.one/documentation/developers/analog-gmp/supported-networks#testnet)

## Task: Send a Message Using a GMP Gateway Contract

- Use the Sepolia testnet GMP gateway contract to send a message. The contract address is: [Sepolia Etherscan Contract](https://sepolia.etherscan.io/address/0xB5D83c2436Ad54046d57Cd48c00D619D702F3814#writeContract)

## Steps to Deploy and Interact with the Contract

1. **Deploy the Contract:**
   - Open [Remix Ethereum IDE](https://remix.ethereum.org/).
   - Create a new file and copy the content from [Counter.sol](https://github.com/Analog-Labs/analog-gmp-examples/blob/main/examples/simple/Counter.sol).
   - Compile the contract.
   - Deploy the contract on the desired testnet using your preferred method (e.g., Injected Web3, MetaMask).

2. **Interact with the Contract:**
   - Once deployed, you can interact with the contract functions directly from Remix or using Etherscan's contract interaction interface.
   - To send a message using the GMP gateway contract, navigate to the Sepolia Etherscan link provided above, connect your wallet, and interact with the `writeContract` functions.

## Additional Resources

- Analog Documentation: [Analog Documentation](https://docs.analog.one/)
- Remix Ethereum IDE: [Remix](https://remix.ethereum.org/)

For further assistance, please refer to the official Analog documentation or reach out to the community for support.
