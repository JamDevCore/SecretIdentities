import React, { Component } from 'react';

import './GenerateCodeName.css';


class GenerateCodeName extends Component{
constructor(props){
super(props);
this.state= {realName: '',color: '', animal: ''};
this.handleUpdate = this.handleUpdate.bind(this);
this.generateIdentity = this.generateIdentity.bind(this);



}


generateIdentity() {

    this.props.generateIdentity(this.state.realName, this.state.color, this.state.animal);
    this.setState({ realName: '', color: '', animal: ''});
    
  }

handleUpdate(event){
    event.preventDefault(); 

    this.setState({[event.target.name]: event.target.value})
}



    render(){
    return(
<div className= "GenerateCodeName">
<form className ="myForm">
    <div>
        <label>Real Name</label><br/>
        <input type = "text" name = "realName" onChange= {this.handleUpdate} value={this.state.realName} required = "required"/>
    </div>
    <div>
            <label>Favourite Colour</label><br/>
            <input type = "text" name = "color" onChange= {this.handleUpdate} value={this.state.color} required = "required"/>
        </div>
    <div>
<label>Favourite Animal</label><br/>
<input type = "text" name = "animal" onChange = {this.handleUpdate} value={this.state.animal} required = "required" />
</div>
<br/>
<br/>
<button type = "button" onClick ={this.generateIdentity}>Generate New Identity</button>
</form>

</div>


    );
}



}

export default GenerateCodeName;