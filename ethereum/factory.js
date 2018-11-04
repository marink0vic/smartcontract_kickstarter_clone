import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4b2C1972A57eb0b8b49A72bCdA7A30E7d80aA7f4'
);

export default instance;