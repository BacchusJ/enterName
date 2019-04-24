import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {InputName} from './InputName'
import {DisplayName} from './DisplayName'

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: ''
    }
  }

  handleColorChange = (name) => {
    console.log(name)
    this.setState({
      name: name
    })
    // console.long("handleColorChange called in App.js")
  }

  render() {
    return (
      <div>
      <InputName colorChangedCallback={this.handleColorChange}/>
      <DisplayName name={this.state.name}/>
      </div>
    )
  }
}
export default App;
