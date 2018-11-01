import Web3 from 'web3';

// reminder: case wen user doesn't have metamask installed is not implemented
const web3 = new Web3(window.web3.currentProvider);

export default web3;