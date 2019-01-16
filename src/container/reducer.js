import uuid from 'uuid/v4';
import { ADD_TODO, REMOVE_TODO } from './constatns';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = uuid();
      return { ...state, tasks: [...state.tasks, { ...action.payload.values, id }] };
    }
    case REMOVE_TODO: {
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) };
    }
    default:
      return state;
  }
};

export default reducer;
