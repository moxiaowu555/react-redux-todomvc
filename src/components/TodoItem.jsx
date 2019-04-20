import React, {Component} from 'react'
import classnames from 'classnames'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props
    return (
      <li className={classnames({
        completed: todo.completed,
        editing: false
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => {toggleTodo(todo.id)}}/>
        <label>{todo.text}</label>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}></button>
        </div>
        <input className="edit" value={todo.text} onChange={() => {}} />
      </li>
    )
  }
}