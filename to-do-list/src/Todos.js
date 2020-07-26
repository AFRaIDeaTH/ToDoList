import React from "react";
import { MdCheck, MdClose } from "react-icons/md";

function Todos({ todos, completed, failed, completeTodo, failTodo }) {
  const todoList = todos.map((todo) => {
    return (
      <div className="todo" key={todo.id}>
        {todo.task}
        <button
          className="complete-todo"
          onClick={() => {
            completeTodo(todo.id);
          }}
        >
          <MdCheck color="green" />
        </button>
        <button
          className="fail-todo"
          onClick={() => {
            failTodo(todo.id);
          }}
        >
          <MdClose color="crimson" />
        </button>
      </div>
    );
  });

  const completedList = completed.map((todo) => {
    return (
      <div className="completed-todo" key={todo.id}>
        {todo.task}
      </div>
    );
  });

  const failedList = failed.map((todo) => {
    return (
      <div className="failed-todo" key={todo.id}>
        {todo.task}
      </div>
    );
  });

  return (
    <div className="full-list">
      <div className="todo-list">{todoList}</div>
      <div className="completed-list">{completedList}</div>
      <div className="failed-list">{failedList}</div>
    </div>
  );
}

export default Todos;
