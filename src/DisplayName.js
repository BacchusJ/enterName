import React, {Component} from 'react';

export class DisplayName extends Component {

  render() {
    let name = this.props.name
    return <div>{this.props.name}</div>
  }
}
