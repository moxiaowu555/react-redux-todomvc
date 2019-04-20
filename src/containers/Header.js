import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import Header from '../components/Header.jsx'

export default connect(null, { addTodo })(Header)