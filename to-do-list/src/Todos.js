import React from "react";

function Todos({ todos, deleteTodo }) {
  const todoList = todos.map((todo) => {
    return (
      <div className="todo" key={todo.id}>
        {todo.task}
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="todo-list">{todoList}</div>;
}

export default Todos;
