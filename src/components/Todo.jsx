import React from "react";
import "./CSS/Todo.css";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-header">Task Tracker</div>
      <div className="todo-add">
        <input type="text" className="todo-input" placeholder="Add a task" />
        <div className="todo-button">Add</div>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default Todo;
