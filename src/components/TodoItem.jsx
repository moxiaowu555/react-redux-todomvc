import React, {Component} from 'react'
import classnames from 'classnames'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      text: props.todo.text,
      isCancel: false
    }
  }

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props
    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => {toggleTodo(todo.id)}}/>
        <label
          onDoubleClick={ this.handleDoubleClick }>{todo.text}</label>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}></button>
        </div>
        <input
          className="edit"
          ref="editInput"
          value={ this.state.text }
          onChange={ this.handleChange }
          onBlur={ (e) => this.saveTodo(todo.id, e) }
          onKeyDown={ (e) => this.keyDownHandler(todo.id, e) } />
      </li>
    )
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleDoubleClick = () => {
    this.setState({ editing: true }, function() {
      this.refs.editInput.focus()
    })
    
  }

  saveTodo = (id, e) => {
    // const id = this.state.currentEditTodo.id
    const text = e.target.value
    this.props.editTodo(id, text)
    this.setState({ editing: false })
  }

  keyDownHandler = (id, e) => {
    if(e.which === 13) {
      this.saveTodo(id, e)
    } else if (e.which === 27) {
      const text = this.props.todo.text
      this.setState({ editing: false, text })
    }
  }
}