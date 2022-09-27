import { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log("here", inputValue);
    setTodoList([...todoList, inputValue]);
  };

  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
