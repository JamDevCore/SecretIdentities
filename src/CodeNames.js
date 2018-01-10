
import React, { Component } from 'react';

import './CodeNames.css';


class CodeNames extends Component  {

    constructor(props) {
    super(props);
    this.state = { greeting: 'Hello', appName: 'Happy' };
  
    this.destroyTheEvidence = this.destroyTheEvidence.bind(this);
  
  
    
   
  }



  destroyTheEvidence(){
this.props.destroyTheEvidence(this.props.realName, this.props.codeName)

  }
  render() {
      return (
       <div className = "CodeNames">
          <p>
         Ok {this.props.realName}, your new secret identity is</p><p><span> {this.props.descriptor}{this.props.codeName}</span></p>
         <p>Make sure to hide your tracks and destroy the evidence below!</p>
          
           
 <button id = "evidence" onClick = {this.destroyTheEvidence}>Destroy the Evidence</button>
        </div>
       
        
      );
    }
  }

 
  export default CodeNames;