import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5Fc0Fc9f6c9905aAc59643128197Ac1269886740'
);

export default instance;