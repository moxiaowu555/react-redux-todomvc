import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/index'
import TodoList from '../components/TodoList.jsx'
import { getVisibleTodos } from '../selectors/index'
const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
