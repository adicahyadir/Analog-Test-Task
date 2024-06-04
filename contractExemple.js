// Import Web3 library
const Web3 = require('web3');

// Provider can be a HTTPProvider or a WebsocketProvider
// For example, using Infura:
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Contract ABI - this should match the ABI of your deployed contract
const contractABI = [
    // ... other ABI definitions
    {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    // ... other ABI definitions
];

// The address of the deployed contract
const contractAddress = '0xYourContractAddress';

// Create a contract instance
const ownerContract = new web3.eth.Contract(contractABI, contractAddress);

async function authenticateNFTTokenHolder(tokenHolderAddress) {
    try {
        // Call the getOwner function from the contract
        const owner = await ownerContract.methods.getOwner().call();

        // Check if the token holder address matches the owner
        if (owner.toLowerCase() === tokenHolderAddress.toLowerCase()) {
            console.log('Authentication successful.');
            // Proceed with your application logic for authenticated users
        } else {
            console.log('Authentication failed.');
            // Handle unauthenticated user case
        }
    } catch (error) {
        console.error('Error authenticating NFT token holder:', error);
        // Handle error case
    }
}

// Example usage
authenticateNFTTokenHolder('0xTokenHolderAddress');
