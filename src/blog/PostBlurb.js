import React, { Component } from 'react'
import { Link } from 'react-router'
import { Well } from 'react-bootstrap'

export default class ReactFromScratch extends Component {
  render() {
    return (
      <Well>
        <Link to={'/blog/' + this.props.id}>{this.props.title}</Link>
      </Well>
    );
  }
}
