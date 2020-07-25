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
    completed: [],
    failed: [],
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
  };
  completeTodo = (id) => {
    let completedTodo = this.state.todos.find((todo) => {
      return todo.id === id;
    });
    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    let newCompleted = [...this.state.completed, completedTodo];
    this.setState({
      todos: newTodos,
      completed: newCompleted,
    });
  };
  failTodo = (id) => {
    let failedTodo = this.state.todos.find((todo) => {
      return todo.id === id;
    });
    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    let newFailed = [...this.state.failed, failedTodo];
    this.setState({
      todos: newTodos,
      failed: newFailed,
    });
  };
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          completed={this.state.completed}
          failed={this.state.failed}
          completeTodo={this.completeTodo}
          failTodo={this.failTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
