import React, { Component } from "react";
import Bucket from "./Bucket";

class DisplayBucket extends Component {
  render() {
    const { buckets } = this.props;
    return (
      <div>
        <ul className="list-group my-4">
          <h5>Bucket List</h5>

          {buckets.map(x => {
            return <Bucket title={x.bucket} />;
          })}
        </ul>
      </div>
    );
  }
}

export default DisplayBucket;
