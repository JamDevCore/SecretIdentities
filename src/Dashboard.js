
import React, { Component } from 'react';
import './Dashboard.css';
import CodeNames from './CodeNames';
import GenerateCodeName from './GenerateCodeName';
import PageHeader from './PageHeader';



class Dashboard extends Component  {

    constructor(props) {
    super(props);
    this.state = { realName: '', codeName: '', descriptor: ['Wild', 'Uncouth', 'Radical','Jubilant', 'CrossEyed']}
    this.generateIdentity = this.generateIdentity.bind(this);
    this.destroyTheEvidence = this.destroyTheEvidence.bind(this);
    this.renderName = this.renderName.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  destroyTheEvidence(yourname, psuedonym){
    
this.setState({realName: '', codeName: ''});


  }


 generateIdentity(identity, color, animal) {

    this.setState({realName: identity,  codeName:color + animal});
    
    
  }

  randomize(desc){
    return desc[Math.floor(Math.random()*desc.length)];

  }

  renderName(){
    if (this.state.realName){
      const randomDescriptor = this.randomize(this.state.descriptor);
      return <CodeNames 
      realName = {this.state.realName} 
      codeName = {this.state.codeName} 
      descriptor = {randomDescriptor}
      destroyTheEvidence ={this.destroyTheEvidence}/>}

      
  

  }
    render() {
     

      return (
        <div className="Dashboard">
         <PageHeader/>
         <GenerateCodeName generateIdentity={this.generateIdentity}/>
         {this.renderName()}
        </div>
      );
    }
  }

 
  export default Dashboard    