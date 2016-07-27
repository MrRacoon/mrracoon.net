import React, { Component } from 'react'
import { Well, Button } from 'react-bootstrap'

export default class Project extends Component {
  render() {
    const title = this.props.title
    const link  = this.props.link
    return (
      <div>
        <Well>
          <h3>{title}</h3>
          <Button href={link}>Check it out</Button>
        </Well>
      </div>
    );
  }
}
