import { Component } from "react";

export const Form = ({ text, handleChange, addToList }) => {
  return (
    <div className="form">
      <input
        onChange={handleChange}
        value={text}
        placeholder="Whats on your mind?"
        required
      />
      <button onClick={addToList}>Add</button>
    </div>
  );
}


