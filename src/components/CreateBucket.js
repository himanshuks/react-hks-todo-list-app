import React, { Component } from "react";

class BucketContainer extends Component {
  render() {
    const { bucket, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <h5>Create Bucket</h5>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="start typing..."
              value={bucket}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-success ml-3">
              Add Bucket
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BucketContainer;
