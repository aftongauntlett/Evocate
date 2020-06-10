import React, { Component } from "react";
import { Button } from 'react-bootstrap'
import "./style.css";

const users = [
  { username: 'Gary', score: 100 },
  { username: 'Dan', score: 90 },
  { username: 'Erik', score: 90},
]

export default class index extends Component {
  
  render () {
    const usersElements = [] 
    for (let user of users) {
      usersElements.push( 
        <div>
          <div>Name：{user.username}</div>
          <div>Score：{user.score}</div>
          <hr />
        </div>
      )
    }

    return (
      <div>
        <div>{usersElements}</div>

        <div class="row">
          <Button>NEW GAME</Button>
        </div>

      </div>
      
    )
  }
}
