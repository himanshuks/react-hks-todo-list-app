import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateBucket from "./components/CreateBucket";
import DisplayBucket from "./components/DisplayBucket";

class App extends Component {
  state = {
    buckets: [],
    bucket: ""
  };

  handleChange = e => {
    this.setState({
      bucket: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newBucket = {
      bucket: this.state.bucket
    };

    const updatedBuckets = [...this.state.buckets, newBucket];

    this.setState({
      buckets: updatedBuckets,
      bucket: ""
    });
  };
  render() {
    return (
      <div className="container mt-3">
        <center>
          <h1>Todo App</h1>
        </center>
        <CreateBucket
          bucket={this.state.bucket}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <DisplayBucket
          buckets={this.state.buckets}
          handleOpen={this.handleOpen}
        />
      </div>
    );
  }
}

export default App;
