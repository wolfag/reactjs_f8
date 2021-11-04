import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Count from './Count';
import { useStore } from './store/hooks';
import { actions } from './store';

const lessonList = [
  {
    id: 1,
    name: 'Lesson 1',
  },
  {
    id: 2,
    name: 'Lesson 2',
  },
  {
    id: 3,
    name: 'Lesson 3',
  },
];

function App() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [msg, setMsg] = useState('');

  const [state, dispatch] = useStore();

  const countRef = useRef(null);

  useEffect(() => {
    const handle = ({ detail }) => {
      setMsg(detail);
    };
    window.addEventListener(`lesson-${currentLesson}`, handle);

    return () => {
      window.removeEventListener(`lesson-${currentLesson}`, handle);
    };
  }, [currentLesson]);

  return (
    <div className='App'>
      <Count thisRef={countRef} />
      <ul>
        {lessonList.map((item) => (
          <li
            key={item.id}
            onClick={() => setCurrentLesson(item.id)}
            style={{
              color: item.id === currentLesson ? 'red' : 'black',
            }}
          >
            {item.name}
            {item.id === currentLesson && msg}
          </li>
        ))}
      </ul>
      <section>
        <h2>todolist</h2>
        <input
          type='text'
          value={state.todoInput}
          onChange={(e) => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(actions.addTodo());
            dispatch(actions.setTodoInput(''));
          }}
          disabled={!state.todoInput}
        >
          Add
        </button>
        {state.todoList.map((item) => {
          return (
            <li
              key={item}
              onClick={() => {
                dispatch(actions.deleteTodo(item));
              }}
            >
              {item}
            </li>
          );
        })}
      </section>
    </div>
  );
}

export default App;
