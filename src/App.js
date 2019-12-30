import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName : 'Dipak Pachpande'
  }

  userNameChangedHandler = (event) =>{
    this.setState({userName : event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>First React Assignment</h1>
        <UserInput 
          changed={this.userNameChangedHandler} 
          currentName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Dipak" />
      </div>
    );
  }
}

export default App;
