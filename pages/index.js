import React, { Component } from 'react';
import factory from '../ethereum/factory'

class Index extends Component {
  async componentDidMount(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
  }

  render() {
   return <div>Campaings</div>
  }
}

export default Index;