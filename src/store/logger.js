function logger(reducer) {
  return (prevState, action) => {
    console.groupCollapsed('logger');
    console.log('prev', prevState);
    console.log('action', action);

    const nextState = reducer(prevState, action);

    console.log('next', nextState);
    console.groupEnd('logger');

    return nextState;
  };
}

export default logger;
