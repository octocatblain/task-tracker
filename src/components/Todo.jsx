import React, { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import Todoitems from "./TodoItems";

const Todo = () => {
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
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <Todoitems
              key={item.index}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
