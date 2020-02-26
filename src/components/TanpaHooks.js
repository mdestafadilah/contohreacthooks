import React, { Component } from "react";

class TanpaHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times without hooks`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times without hooks`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times without hooks</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default TanpaHooks;
