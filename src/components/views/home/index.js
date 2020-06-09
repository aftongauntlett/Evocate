import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="description">
        Description of game!
        </div>

        <Button variant="primary" size="lg">
        START
        </Button>
      </div>
    )
  }
}
