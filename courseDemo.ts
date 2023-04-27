const conversations = [
  {
    type: 'answer',
    content: `When we deploy a smart contract on the blockchain or interact with a deployed smart contract, we need gas, and for that we need to have a Web3 wallet, which can be <span class="underline">MetaMask</span>. <span class="text-[#256BEF]">Let's install a MetaMask</span>.`
  },
  {
    type: 'question',
    content: 'Click to install MetaMask'
  },
  {
    type: 'answer',
    content: `Click <a href="https://metamask.io/ rel="noreferrer" target="_blank" class="underline text-[#256BEF]">(https://metamask.io/)</a> to Download Metamask`
  },
  {
    type: 'answer',
    content: `Then add Goerli test network to the network inside the small fox wallet.`
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

const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);

    address owner;

    constructor() {
        owner = msg.sender;
    }

    function test() external {
        emit Log(msg.sender, "Hello EVM!");
    }

    function get() external view returns(string memory greeting){
        if(owner == msg.sender) {
        return greeting = "Hello, world!";
        }
    }
}`;

const videoLink = '';

export { conversations, markdownText, solidityCode, videoLink };
