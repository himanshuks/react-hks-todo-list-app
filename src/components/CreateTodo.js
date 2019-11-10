import React, { Component } from "react";

class CreateTodo extends Component {
  render() {
    const { todo, editTodo, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="start typing..."
              value={todo}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className={
                editTodo ? "btn btn-warning ml-3" : "btn btn-success ml-3"
              }
            >
              {editTodo ? "Edit Todo" : "Add Todo"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
