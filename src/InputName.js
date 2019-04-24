import React, {Component} from 'react';

export class InputName extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleImputColorTextChange = (e) => {

    this.setState({
      name: e.target.value
    })
  }

  handleApplyButtonClick = () => {
    console.log("handleApplyButtonClick")
    this.props.colorChangedCallback(this.state.name)
    console.log(this.state.name)
  }
render() {
  return(
    <div>
    <input onChange={this.handleImputColorTextChange} type="text"/>
    <button onClick={this.handleApplyButtonClick}>Send</button>
    </div>
  )
}
}
