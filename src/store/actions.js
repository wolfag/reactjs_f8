import { ADD_TODO_ITEM, DELETE_TODO_ITEM, SET_TODO_INPUT } from './constants';

export const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};

export const addTodo = () => {
  return {
    type: ADD_TODO_ITEM,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO_ITEM,
    payload,
  };
};
