import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions/index'
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)