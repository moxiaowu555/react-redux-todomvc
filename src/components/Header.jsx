import React from 'react'
import TodoTextInput from './TodoTextInput.jsx'

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput></TodoTextInput>
  </header>
)

export default Header