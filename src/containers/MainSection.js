import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/index'
import MainSection from '../components/MainSection.jsx'

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: state.todos.filter(todo => todo.completed).length
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)