import React, { useEffect, useState } from "react";
import "./CSS/Todo.css";

const [todos, setTodos] = useState([]);
const inputRef = useRef(null);

let count = 0;
const add = () => {
  setTodos([
    ...todos,
    { no: count++, text: inputRef.current.value, display: "" },
  ]);
  inputRef.current.value = "";
};
useEffect(() => {
  console.log(todos);
}, [todos]);

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-header">Task Tracker</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          className="todo-input"
          placeholder="Add a task"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todo-button"
        >
          Add
        </div>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default Todo;
