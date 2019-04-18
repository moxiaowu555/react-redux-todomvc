import React, { Component } from 'react'

export default class TodoTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus />
    )
  }
}