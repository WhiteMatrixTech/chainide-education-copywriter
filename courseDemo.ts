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
# Hardhat-based full-stack Polygon Mumbai Project

This template has been transformed based on the templates of [buildspace](https://buildspace.so/) and we would like to thank buildspace for providing the learning resources.

This project shows a basic Hardhat use case that increments the wave count by 1 each time it is called, it has a contract sample, a contract test, a script to deploy the contract, and a front-end page.

To implement this template, follow these steps:

### 1. Install MetaMask, configure the wallet, and get some funds

### Install MetaMask

When deploying a smart contract on the blockchain or when making a transaction to a deployed smart contract, a gas fee must be paid, and for that, we need to use a crypto wallet which can be MetaMask. Click [here](https://metamask.io/) to install MetaMask.

###  Manually adding the Mumbai testnet

After installing MetaMask, you need to manually add the Polygon Mumbai Testnet to MetaMask. To add Polygon Mumbai Testnet to MetaMask, see the [MetaMask Polygon documentation](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask#add-the-polygon-network-manually).

![](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Mumbai_Polygon/image-20221122164743259.png)



### Obtaining Testnet Matic

Once Mumbai has been added to MetaMask, navigate to the [Polygon Faucet](https://faucet.polygon.technology/) to receive test tokens. Tokens are needed to pay for gas fees to deploy and interact with the smart contract. On the faucet page, choose Mumbai as the network, MATIC as the token and paste your MetaMask wallet address. Then, click submit and faucet will send you some test MATIC within a minute.

<img src="https://d3gvnlbntpm4ho.cloudfront.net/ERC+721+Deployment+on++Mumbai/Polygon_PR_get_tokens.png" width="100%" height="100%" />

### 2. Chang configurations in 'hardhat.config.js' file

First of all, need to change the configurations in hardhat.config.js file. You can find it in the root directory of your project.

1. Replace 'YOUR_MUMBAI_API_URL' with Mumbai RPC, available via [Infura](https://infura.io/),

 [Alchemy](https://www.alchemy.com/) or directly from MetaMask).

2. Replace 'YOUR_PRIVATE_MUMBAI_ACCOUNT_KEY' with your account private key.

\`\`\`
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: "YOUR_MUMBAI_API_URL",
      accounts: ["YOUR_PRIVATE_MUMBAI_ACCOUNT_KEY"],
    },
  },
};
\`\`\`

![/Hardhat_Dapp_Wave_on_Mumbai_Polygon/image-20221122165828418.png](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Mumbai_Polygon/image-20221122165828418.png)

***Don't share your private key with anyone, otherwise you may lose all of your crypto***.

### 3. Let's get it running!

Open npm-hardhat in terminal

\`\`\`
npm install
npx hardhat run scripts/run.js
\`\`\`

You should see your console.log run from within the contract, and then you should also see the contract address printed out. Here is what it should look like.

![image-20221111143427975](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111143427975.png)

Remember, when you run scripts/run.js, you are actually

1. Creating a new local Ethereum network.

2. Deploying your contract.

3. Then, when the script ends, Hardhat will automatically destroy that local network.
   We need a way to keep the local network alive. why? Well, think of a local server.
   You want to keep it alive so you can continue talking to it, for example,
   if you have a local server with an API that you make on it,
   you want to keep this local server alive so you can use it on your website work and test it out.
   We're going to do the same thing here. Go to your terminal and create a new window.
   In this window, CD back to your project. Then, go ahead and run here.

   \`\`\`
   npx hardhat node
   \`\`\`

You create a local Ethereum network.
And, as you can see, Hardhat gives 20 accounts to work on and gave them all 10,000 ETH.
So now, it's just an empty blockchain. There are no blocks.

We don't need this local blockchain network now, exit first

\`\`\`
ctrl + c
\`\`\`

### 4. Deploy to the Mumbai Test Network

\`\`\`
npx hardhat run scripts/deploy.js --network mumbai
\`\`\`

Here is my output:

\`\`\`
Deploying contracts with the account: 0xF79A3bb8d5b93686c4068E2A97eAeC5fE4843E7D
Account balance: 3198297774605223721
WavePortal address: 0xd5f08a0ae197482FA808cE84E00E97d940dBD26E
\`\`\`

Copy the address of the deployed contract in the last line and save it somewhere.
Don't lose it! You'll need it for the foreground later.
Yours will be different from the above-mentioned one.

### 5. Go to the front-end directory

You need to get this permission in your React app.
It's as simple as creating a new property in your App.js file called contractAddress and setting its value to the WavePortal address printed out in the console.

\`\`\`
cd app
npm install
\`\`\`

Open /app/src/App.js file and copy your WavePortal address and replace contractAddress:

\`\`\`
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  /**
   * Create a variable here that holds the contract address after you deploy!
   */
  const contractAddress = "0xd5f08a0ae197482FA808cE84E00E97d940dBD26E"; // there
\`\`\`

Then copy /artifacts/contracts/WavePortal.sol/WavePortal.json file to replace /app/src/utils/WavePortal.json file

Running front-end pages

\`\`\`
npm run start
\`\`\`

### 6. Port forwarding using ChainIDE

For port mapping, click the port, select npm-hardhat for image, port 3000, and click Add:

![image-20221111144455408](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111144455408.png)

Click the prompt button as shown in the figure below to open the page.

![image-20221111144613105](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111144613105.png)

Switch MetaMask to Mumbai Testnet Network, connect to the wallet, click wave, and that should go perfect!

![image-20221111144811987](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111144811987.png)
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

const elementaryLearningDemoSolidityCode = `//SPDX-License-Identifier: Unlicense
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

const videoLink = 'https://d1pbwflyd697fe.cloudfront.net/web3-app-develop.mp4';

export {
  conversation1,
  conversation2,
  elementaryLearningDemoSolidityCode,
  markdownText,
  videoLink,
  whitelistSolidityCode
};
