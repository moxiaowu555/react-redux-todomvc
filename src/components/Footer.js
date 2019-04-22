import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'
import FilterLink from '../containers/FilterLink'

const filter_titles = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}
const Footer = ({ leftCount, clearCompleted, completedCount }) => {
  const itemWord = leftCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{ leftCount }</strong> { itemWord } left</span>
      <ul className="filters">
      {Object.keys(filter_titles).map(filter => 
        <li key={filter}>
          <FilterLink filter={filter}>
            {filter_titles[filter]}
          </FilterLink>
        </li>
      )}
      </ul>
      {
        !!completedCount &&
        <button
        className="clear-completed"
        onClick={ clearCompleted }>Clear completed</button>
      }
    </footer>
  )
}

export default Footer