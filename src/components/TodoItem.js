import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const {
      title,
      isCompleted,
      handleEdit,
      handleDelete,
      handleComplete
    } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6 className={isCompleted ? "todo-completed" : null}>{title}</h6>
        <div>
          <button className="mx-1 btn-warning" onClick={handleEdit}>
            Edit
          </button>
          <button className="mx-1 btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="mx-1 btn-success" onClick={handleComplete}>
            {isCompleted ? "Mark as Not Completed" : "Mark as Completed"}
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
