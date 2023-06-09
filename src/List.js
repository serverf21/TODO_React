import { Component } from "react";
import { Todo } from "./Todo";

export const List = ({ todos, handleDelete }) => {
  return (
    <div className="list">
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} handleDelete={() => handleDelete(i)} />
      ))}
    </div>
  );
}
