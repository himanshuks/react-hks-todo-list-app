import React, { Component } from "react";
import TodoItem from "./TodoItem";

class DisplayTodo extends Component {
  render() {
    const {
      todos,
      editTodo,
      clearTodos,
      handleDelete,
      handleEdit,
      handleComplete
    } = this.props;
    return (
      <div>
        <ul className="list-group my-4">
          <h5>Todo List</h5>

          {todos.map(x => {
            return (
              <TodoItem
                key={x.id}
                title={x.todo}
                isCompleted={x.isCompleted}
                isEditMode={editTodo}
                handleDelete={() => handleDelete(x.id)}
                handleEdit={() => handleEdit(x.id)}
                handleComplete={() => handleComplete(x.id)}
              />
            );
          })}

          <button
            type="button"
            className="btn btn-danger mt-3"
            onClick={clearTodos}
          >
            Delete All
          </button>
        </ul>
      </div>
    );
  }
}

export default DisplayTodo;
