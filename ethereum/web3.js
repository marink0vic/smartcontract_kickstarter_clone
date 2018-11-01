import Web3 from 'web3';
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or user is not using metamask
  const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/v3/ed78e8abdb5c4ba2ba07119884d0f1c3'
  );

  web3 = new Web3(provider);
}

export default web3;