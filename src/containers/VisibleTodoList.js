import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/index'
import TodoList from '../components/TodoList.jsx'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
