import './App.css';
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, value]);
    setValue('');
  }

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Add todo: </label>
        <input
          id="new-todo"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)}
        />
        <button>
          Add #{items.length + 1}
        </button>
      </form>
    </div>
  );
}

function TodoList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
