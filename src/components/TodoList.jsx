import React from 'react'
import TodoItem from './TodoItem.jsx'

const TodoList = ({ todos, actions }) => (
  <ul className="todo-list">
    {todos.map(todo => 
      <TodoItem
        key={todo.id}
        todo={todo}
        {...actions}></TodoItem>)}
  </ul>
)

export default TodoList