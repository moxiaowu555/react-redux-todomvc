import * as type from '../constants/ActionTypes'

export const addTodo = text => ({ type: type.ADD_TODO, text })
export const toggleTodo = id => ({ type: type.TOGGLE_TODO, id })
export const editTodo = (id, text) => ({ type: type.EDIT_TODO, id, text})
export const deleteTodo = id => ({ type: type.DELETE_TODO, id })
export const completeAllTodo = () => ({ type: type.COMPLETE_ALL_TODO })
export const clearCompleted = () => ({ type: type.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: type.SET_VISIBILITY_FILTER, filter })