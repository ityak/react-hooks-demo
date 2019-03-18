import React, { Component } from 'react';
import './App.css';
import Test from './Test';

class App extends Component {
  state = {
    swtich: false
  }
  render() {
    return (
      <div className="App">
        <Test swtich={this.state.swtich}/>
        <button onClick={()=> this.setState({swtich:!this.state.swtich})}>父级切换</button>
      </div>
    );
  }
}

export default App;
