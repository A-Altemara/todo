import './App.css';
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ])

  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newToDos = [...todos, { text: value, isCompleted: false }];
    setTodos(newToDos);
    setValue('')
  }

  const removeToDo = e => {
    const index = Number(e.target.id)
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <>
      <h1>To Do</h1>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeToDo}>{todo.text}</div>
      ))}
      {/* form should be broken out into another componenet */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={value}
          placeholder="Add ToDo .."

          onChange={e => setValue(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;
