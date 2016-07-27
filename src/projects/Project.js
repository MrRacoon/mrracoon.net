import React, { Component } from 'react'
import { Well, Button } from 'react-bootstrap'

export default class Project extends Component {
  render() {
    return (
      <div>
        <Well>
          <h3>{this.props.title}</h3>
          <Button href={this.props.link}>Check it out</Button>
        </Well>
      </div>
    );
  }
}
