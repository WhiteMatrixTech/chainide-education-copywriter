const conversation1 = [
  {
    type: 'answer',
    content: `What is Whitelist?`,
    key: 'd545hds'
  },
  {
    type: 'answer',
    content: `In general, a whitelist refers to a list of approved entities, such as a list of IP addresses that can access a specific website, a list of software that can be installed, or a list of email domains that are allowed to be used, and so on. In this lesson, we will use Solidity (one of Ethereum's smart contract programming languages) to write a simple whitelist functionality, where users on the whitelist will have the authority to mint NFTs.`,
    key: '4sdsgbvn2114gfd'
  },
  {
    type: 'answer',
    content: `There are three ways to implement a whitelist functionality in a smart contract:
    1.Use an array and mapping to store and verify if an address is on the whitelist
    2.Use a Merkle tree to verify if an address is on the whitelist.
    3.Use a backend and signature to assign whitelist permissions to an address.`,
    key: '5564fg3r2awsg'
  },
  {
    type: 'answer',
    content: `For beginners, method 1 is the easiest way to understand, so this lesson will use Solidity to store and verify whether an address is on the whitelist using an array and mapping.`,
    key: '315bvfh21231'
  }
];

const conversation2 = [
  {
    type: 'answer',
    content: `Let's initiate a Contract in Solidity.`,
    key: 'dfh2245fggh'
  },
  {
    type: 'answer',
    content: `Please note that this section might be a bit lengthy, and it may be the first obstacle you encounter. Be patient, and I believe you can get through it smoothly.`,
    key: 'nghkhuq'
  },
  {
    type: 'answer',
    content: `In the EXPLORER section on the right side of the screen, you can see the Whitelist.sol code that we have already written.`,
    key: 'wsetgwg'
  },
  {
    type: 'answer',
    content: `Here is the complete Whitelist.sol code:`,
    key: 'hfghrtgher'
  },
  {
    type: 'answer',
    content: `We are here conducting a line-by-line analysis`,
    key: '738576785687'
  },
  {
    type: 'answer',
    content: `...`,
    key: '316573756731613'
  },
  {
    type: 'answer',
    content: `...`,
    key: '316535737371613'
  },
  {
    type: 'answer',
    content: `...`,
    key: '42345353'
  }
];

const markdownText = `
**AI-driven Web3 Applications Development with ChainIDE**

Welcome to an innovative tutorial that harnesses the power of artificial intelligence and blockchain for creating decentralized applications (dApps). With the help of ChatGPT, a cutting-edge chatbot developed by OpenAI, we will be diving into the exciting world of Web3 applications and exploring how to leverage AI to develop smart contracts.

**Overview of ChatGPT**
ChatGPT is an advanced natural language processing model capable of understanding human language and generating human-like responses. With its wide range of capabilities such as text generation, translation, and text completion, it is a versatile tool for creating dApps. We will be using ChatGPT to create a smart contract for NFT, and exploring its use cases in blockchain such as generating code from human language, aiding in code understanding, code completion, vulnerability detection, error detection, and correction. To get the most out of ChatGPT, it's essential to learn how to formulate prompts effectively.

Here are some helpful tips to craft prompts that will yield optimal results from ChatGPT:

**Prompt Tips:**

1. Instead of asking questions, state your desired outcome clearly. For example, instead of asking "What is the source code for an ERC-20 smart contract?" provide all the necessary details such as "Create an ERC-20 token named 'ChainIDE', symbol 'CDT', with a total supply of 1,000,000 tokens (without decimals), 18 decimal places, using the OpenZeppelin library and Solidity version 0.8.0."
1. If the results are not satisfactory, try executing the same command again.
1. Remember, the more detailed and specific your prompt is, the better the results will be.

<br>

**NFT collection creation using ChatGPT and ChainIDE**
Let's dive into the creation of an ERC-721 smart contract using ChatGPT. We will be using ChainIDE to compile, deploy, and interact with the smart contract.

Here's the prompt for the ERC-721 smart contract we will be creating using ChatGPT:

**Prompt:** "Create a simple ERC-721 smart contract that allows an externally owned account to mint a new NFT by paying 0.1 ETH, with the contract owner receiving the 0.1 ETH. Please use the OpenZeppelin library for the smart NFT contract. Additionally, include a function that enables the owner to award an NFT to a user and upload metadata for the NFT."

Once you prompt this command to ChatGPT, you can expect a response similar to the one given below.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2F1jz7Oi0JfZ1RkkmoLthJ%2F0.png?alt=media)

<br>

**Compile and deploy your smart contract, and interact with it using ChainIDE**
So you've got the source code – now what? The next step is to unleash your creativity by deploying a smart contract that reflects your vision. Let's dive into the process step-by-step!

**Compilation**
First, paste the source code into the ChainIDE editor panel and compile it using the compiler panel. This will generate the ABI and Byte Code that are essential for the deployment process.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2F1bKZnYJZdg3S6dYLkyMq%2F1.png?alt=media)

<br>

**Deployment**
Speaking of deployment, you can deploy your smart contract on any EVM-supported blockchain. Just make sure you've connected your MetaMask wallet and have some dummy ethers in your wallet for the testnet. To deploy, head to the Interaction & Deploy panel, enter the name and symbol for your NFT collection, and hit the deploy button.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2FhLB5njirlg1q4dmjJnmM%2F2.png?alt=media)

<br>

**Interaction & View on OpenSea**
If your smart contract deploys successfully, you'll receive a contract address and gain access to the "INTERACT" panel of ChainIDE, where you can use all the functions of your smart contract.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2FZlClzsIkwM3VShxjwS11%2F3.png?alt=media)

These functions have different purposes, such as checking the name of the NFT collection using "name()", minting an NFT using "mint()", or awarding an NFT to a wallet address using "awarditem()".

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2FHSkNC8v2uORHHb1F6W6F%2F4.png?alt=media)

For "awarditem()", you need to provide two parameters: the address of the recipient and the tokenURL, which is the URL for the NFT image you've uploaded to decentralized storage. There are multiple decentralized storage options available, but for this tutorial, we used[ ](https://nft.storage/files/)<https://nft.storage/files/>. To get the tokenURL, follow these steps:

1. Upload the image you want to use for your NFT to[ ](https://nft.storage/files/)<https://nft.storage/files/> and get the CID for that image.
2. Create a json file with the image CID and paste it into the IPFS protocol. Then, upload the JSON file to NFT.STORAGE and get the CID for the JSON file.
3. The token URL is "ipfs//+CID for the Json file".

After providing these two parameters and clicking the Submit button, the NFT will be rewarded to the recipient's address.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2FCOqEa7gR2dMUZpTeDOiC%2F5.png?alt=media)

We've awarded two NFTs and added them to our collection successfully. In our smart contract, we also have a function that allows users to mint an NFT by paying 0.1 ETH directly to the contract owner. This function does not require a TokenURL and does not have any associated image.
![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2FivTG2OoCkx8FKl6njSKZ%2F6.png?alt=media)

To mint an NFT using this function, simply pay 0.1 ETH + gas fee, and the NFT will be minted to your connected wallet address. No other parameters are required.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXUF7rK5ETPvjc2DIXxJs%2Fuploads%2FRUP6hr7HUMThYis3Y0RE%2F7.png?alt=media)
Lastly, all of the minted NFTs can be seen on the [OpenSea Testnet](https://testnets.opensea.io/).

That's all there is to creating AI-driven dApps! If you have any questions, feel free to reach out to us. Thanks for joining us on this journey!
`;

const whitelistSolidityCode = `//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Whitelist {
    // The address that can operate addAddressToWhitelist function
    address public owner;

    // Create a mapping of whitelistedAddresses
    // if an address is whitelisted, we would set it to true, it is false by default for all other addresses.
    mapping(address => bool) private isWhitelisted;

    //Event: record the addresses added to the whitelist
    event AddToWhitelist(address indexed account);
    //Event: record whitelisted excluded addresses
    event RemoveFromWhitelist(address indexed account);

    // Setting the initial whitelisted addresses
    // Setting the address that can operate addAddressToWhitelist function
    // User will put the value at the time of deployment
    constructor(address[] memory initialAddresses) {
        owner =msg.sender;
        for (uint256 i = 0; i < initialAddresses.length; i++) {
            addToWhitelist(initialAddresses[i]);
        }
    }

    /**
        addToWhitelist - This function adds the address of the sender to the
        whitelist
     */

    function addToWhitelist(address _address) public {
        // Check if the user is the owner
        require(owner == msg.sender, "Caller is not the owner");
        // Check if the user has already been whitelisted
        require(!isWhitelisted[_address], "Address already whitelisted");
        // Add the address which called the function to the whitelistedAddress array
        isWhitelisted[_address] = true;
        // Triggers AddToWhitelist event
        emit AddToWhitelist(_address);
    }

    /**
        removeFromWhitelist - This function removes the address of the sender to the
        whitelist
     */

    function removeFromWhitelist(address _address) public {
        // Check if the user is the owner
        require(owner == msg.sender, "Caller is not the owner");
        // Check if the user has not already been whitelisted
        require(isWhitelisted[_address], "Address not in whitelist");
        // Remove the address which called the function to the whitelistedAddress array
        isWhitelisted[_address] = false;
        // Triggers RemoveFromWhitelist event
        emit RemoveFromWhitelist(_address);
    }

    /**
        whitelistedAddresses - This function gives feedback on whether the input address belongs to the whitelist
     */

    function whitelistedAddresses(address _address) public view returns (bool) {
        return isWhitelisted[_address];
    }
}`;

const elementaryLearningDemoSolidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdTracker;
    uint256 private _price = 0.1 ether;

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    function mint() external payable {
        require(msg.value == _price, "MyNFT: incorrect ether value");
        _tokenIdTracker++;
        _safeMint(msg.sender, _tokenIdTracker);
        _setTokenURI(_tokenIdTracker, "");
        address payable owner = payable(owner());
        owner.transfer(msg.value);
    }

    function awardItem(address recipient, string memory tokenURI) public onlyOwner {
        _tokenIdTracker++;
        _safeMint(recipient, _tokenIdTracker);
        _setTokenURI(_tokenIdTracker, tokenURI);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public onlyOwner {
        _setTokenURI(tokenId, _tokenURI);
    }
}`;

const videoLink = 'https://d1pbwflyd697fe.cloudfront.net/web3-app-develop.mp4';

export {
  conversation1,
  conversation2,
  elementaryLearningDemoSolidityCode,
  markdownText,
  videoLink,
  whitelistSolidityCode
};
