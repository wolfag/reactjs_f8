import { ADD_TODO_ITEM, DELETE_TODO_ITEM, SET_TODO_INPUT } from './constants';

const initialState = {
  todoList: [],
  todoInput: '',
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoList: [...state.todoList, state.todoInput],
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}

export { initialState };
export default reducer;
