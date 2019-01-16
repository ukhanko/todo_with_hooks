import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constatns';

export const addTodo = values => ({
  type: ADD_TODO,
  payload: { values },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});
