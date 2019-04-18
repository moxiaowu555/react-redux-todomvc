import React, { Component } from 'react'
import TodoList from './TodoList.jsx'

export default class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList></TodoList>
    </section>
  }
}