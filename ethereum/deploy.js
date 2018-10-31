const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require ('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'twin dignity priority picnic angry expand panic business force scorpion slight split',
  'https://rinkeby.infura.io/v3/ed78e8abdb5c4ba2ba07119884d0f1c3'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  try{
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: '0x'+compiledFactory.bytecode })
      .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
  } catch(e) {
    console.error(e);
  }
};
deploy();