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