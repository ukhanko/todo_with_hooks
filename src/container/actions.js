import { ADD_TODO, REMOVE_TODO } from './constatns';

export const addTodo = values => ({
  type: ADD_TODO,
  payload: { values },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id },
});
