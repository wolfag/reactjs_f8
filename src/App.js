import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const handle = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${currentLesson}`, handle);

    return () => {
      window.removeEventListener(`lesson-${currentLesson}`, handle);
    };
  }, [currentLesson]);

  return (
    <div className='App'>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
