import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/index'
import TodoList from '../components/TodoList.jsx'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const filterTodos = (todos, filter) => {
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
const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
