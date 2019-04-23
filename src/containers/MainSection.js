import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/index'
import MainSection from '../components/MainSection'
import { getCompletedCount } from '../selectors/index'

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedCount(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)