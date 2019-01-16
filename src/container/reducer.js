import uuid from 'uuid/v4';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './constatns';

export const initialState = {
  tasks: [],
  tasksUI: [],
};

const uiInitialState = {
  isShow: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = uuid();
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload.values, id }],
        tasksUI: [...state.tasksUI, { id, ...uiInitialState }],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
        tasksUI: state.tasksUI.filter(task => task.id !== action.payload.id),
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const taskUI = state.tasksUI.find(task => task.id === id);
      if (!taskUI) return state;
      taskUI.isShow = !taskUI.isShow;
      return { ...state, tasksUI: state.tasksUI.map(el => (el.id !== id ? el : taskUI)) };
    }
    default:
      return state;
  }
};

export default reducer;
