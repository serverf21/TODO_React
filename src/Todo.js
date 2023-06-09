import { Component } from "react";

export const Todo = ({ todo, handleDelete }) => {
  return (
    <div className="todo">
      <p>{todo.text}</p>
      <button onClick={handleDelete}>x</button>
    </div>
  );
}