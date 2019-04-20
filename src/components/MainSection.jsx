import React, { Component } from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer.jsx'
// import TodoList from './TodoList.jsx'

export default class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { todosCount, completedCount, actions } = this.props
    return <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={ todosCount === completedCount }
        readOnly/>
      <label
        htmlFor="toggle-all"
        onClick={ actions.completeAllTodo }>Mark all as complete</label>
      <VisibleTodoList></VisibleTodoList>
      <Footer></Footer>
    </section>
  }
}