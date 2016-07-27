import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import Project from './Project'

export default class Projects extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} sm={12}>
            <Project
              title="Friend's Bands' Press Page"
              link="http://mrracoon.net/dak"
              />
          </Col>
        </Row>
      </Grid>
    );
  }
}
