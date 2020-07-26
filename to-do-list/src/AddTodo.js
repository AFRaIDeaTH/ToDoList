import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

class AddTodo extends Component {
  state = {
    task: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state });
  };
  render() {
    return (
      <div>
        <form className="new-todo" onSubmit={this.handleSubmit}>
          <label htmlFor="task">New todo: </label>
          <input
            autocomplete="off"
            type="text"
            id="task"
            onChange={this.handleChange}
          />
          <button className="submit-todo">
            <MdAdd />
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
