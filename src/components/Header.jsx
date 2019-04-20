import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
            className="new-todo"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="What needs to be done?"
            onKeyDown={this.addTodoHandler}
            autoFocus />
      </header>
    )
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  // 添加任务
  addTodoHandler = (e) => {
    const text = e.target.value.trim()
    if(e.which === 13) {
      if(!text.length) {
        return alert('任务不能为空')
      }
      this.props.addTodo(text)
      e.target.value = ''
    }
  }
}