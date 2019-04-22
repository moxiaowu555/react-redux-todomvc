import { 
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  COMPLETE_ALL_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO
} from '../constants/ActionTypes'

const initialState = []
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.length ? state[state.length - 1].id + 1 : 0
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? 
          {...todo, completed: !todo.completed} :
          todo
      ))
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case COMPLETE_ALL_TODO:
      const areAllCompleted = state.every(t => t.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllCompleted
      }))
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed)
    case EDIT_TODO:
      return state.map(todo => 
        todo.id === action.id ?
          {...todo, text: action.text} :
          todo
      )
    default:
      return state
  }
} 