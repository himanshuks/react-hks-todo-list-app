import React, { Component } from "react";
import uuid from "uuid";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

class Bucket extends Component {
  state = {
    todos: [],
    todo: "",
    id: uuid(),
    editTodo: false
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: this.state.id,
      todo: this.state.todo,
      isCompleted: false
    };

    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: updatedTodos,
      todo: "",
      editTodo: false,
      id: uuid()
    });
  };

  clearTodos = () => {
    this.setState({
      todos: []
    });
  };

  handleDelete = id => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    });
  };

  handleEdit = id => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    const selectedTodo = this.state.todos.find(todo => todo.id === id);

    this.setState({
      todos: filteredTodos,
      todo: selectedTodo.todo,
      editTodo: true,
      id: id
    });
  };

  handleComplete = id => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    const selectedTodo = this.state.todos.find(todo => todo.id === id);
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const combine = [...filteredTodos, selectedTodo];
    this.setState({
      todos: combine
    });
  };
  render() {
    const { title } = this.props;
    return (
      <div className="bucket-item">
        <h3>{title}</h3>
        <CreateTodo
          todo={this.state.todo}
          editTodo={this.state.editTodo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <DisplayTodo
          todos={this.state.todos}
          editTodo={this.state.editTodo}
          clearTodos={this.clearTodos}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default Bucket;
