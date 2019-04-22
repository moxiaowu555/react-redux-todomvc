import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
// import TodoList from './TodoList.jsx'

const MainSection = ({ todosCount, completedCount, actions }) => (
  <section className="main">
    {
      !!todosCount && 
      <span>
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={ todosCount === completedCount }
          readOnly/>
        <label
          htmlFor="toggle-all"
          onClick={ actions.completeAllTodo }>Mark all as complete</label>
      </span>
    }
    <VisibleTodoList></VisibleTodoList>
    {
      !!todosCount && 
      <Footer
        completedCount={ completedCount }
        leftCount={ todosCount - completedCount }
        clearCompleted={ actions.clearCompleted }>
      </Footer>
    }
  </section>
)

export default MainSection