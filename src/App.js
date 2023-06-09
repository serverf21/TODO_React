import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  addToList = () => {
    //make an object of text
    const newObj = { text: this.state.text };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newObj],
      text: "" // Optionally, clear the newObject after adding it to the array
    }));
  };

  handleAdd = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleDelete = (index) => {
    console.log(index);
    this.setState((prevState) => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return { todos };
    });
  };

  // create handleAdd and handleRemove functions here

  render() {
    const { text, todos } = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        <Form text={text} handleChange={this.handleAdd} addToList={this.addToList} />
        <List todos={todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
