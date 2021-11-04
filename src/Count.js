import React, { useEffect, useLayoutEffect, useReducer } from 'react';

const initialState = {
  value: 0,
};
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const up = (step) => {
  return {
    type: UP_ACTION,
    payload: step,
  };
};

const down = (step) => {
  return {
    type: DOWN_ACTION,
    payload: step,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION:
      return { ...state, value: state.value + action.payload };
    case DOWN_ACTION:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

const Count = (props) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div ref={props.thisRef}>
      <h1>{count.value}</h1>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          dispatch(down(1));
        }}
      >
        down
      </button>
    </div>
  );
};

export default Count;
