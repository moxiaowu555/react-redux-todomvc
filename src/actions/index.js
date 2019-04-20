import * as type from '../constants/ActionTypes'

export const addTodo = text => ({ type: type.ADD_TODO, text })
export const toggleTodo = id => ({ type: type.TOGGLE_TODO, id })
export const deleteTodo = id => ({ type: type.DELETE_TODO, id })
export const completeAllTodo = () => ({ type: type.COMPLETE_ALL_TODO })
export const setVisibilityFilter = filter => ({ type: type.SET_VISIBILITY_FILTER, filter })