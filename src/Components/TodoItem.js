import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="row todo-row">
      <div className="col-10">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
      </div>

      <div className="col-2 d-flex p-3 justify-content-center">
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
