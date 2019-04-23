import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_ACTIVE:
       return todos.filter(t => !t.completed)
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      default:
        throw Error('Unkown filter: ' + filter)
    }
  }
)

export const getCompletedCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) => 
      todo.completed ? count + 1 : count,
      0
    )
  )
)