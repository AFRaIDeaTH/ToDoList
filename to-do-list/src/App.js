import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        task: "Example todo",
        id: 0,
      },
    ],
  };
  addTodo = (todo) => {
    todo.id =
      this.state.todos.reduce((maxid, todo) => {
        return maxid < todo.id ? todo.id : maxid;
      }, 0) + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
    console.log(this.state);
  };
  deleteTodo = (id) => {
    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
