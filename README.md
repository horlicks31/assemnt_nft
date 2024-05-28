NFT (Non-Fungible Token) Project
This project demonstrates a basic implementation of a Non-Fungible Token (NFT) collection in JavaScript. NFTs are unique digital assets stored on a blockchain that can represent ownership of items such as art, collectibles, and more.

Overview
This project allows you to create and manage a collection of NFTs through simple JavaScript functions. Each NFT has a name, artist, and date of creation. The project includes functionalities to mint new NFTs, list all existing NFTs, and get the total supply of NFTs.

Features
mintNFT: Function to mint a new NFT with a specified name, artist, and date created.
listNFTs: Function to list all existing NFTs with their details.
getTotalSupply: Function to get the total number of NFTs minted.
Getting Started
Prerequisites
Node.js and npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/horlicks31/nft-project.git
cd nft-project
Install dependencies:

bash
Copy code
npm install
Usage
Run the script to mint NFTs and list them:

bash
Copy code
node index.js
Example
javascript
Copy code
let nfts = [];

function mintNFT(name, artist, dateCreated) {
  const nft = {
    name: name,
    artist: artist,
    dateCreated: dateCreated
  };
  nfts.push(nft);
}

function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`  Name: ${nft.name}`);
    console.log(`  Artist: ${nft.artist}`);
    console.log(`  Date Created: ${nft.dateCreated}`);
    console.log('-------------------------');
  });
}

function getTotalSupply() {
  return nfts.length;
}

mintNFT('Sunset Bliss', 'Alice', '2023-05-01');
mintNFT('Ocean Waves', 'Bob', '2023-06-15');
mintNFT('Mountain Peak', 'Charlie', '2023-07-22');

listNFTs();
console.log('Total Supply: ' + getTotalSupply());
License
This project is licensed under the MIT License. See the LICENSE.txt file for details.

