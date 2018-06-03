import React from "react";
import Link from 'gatsby-link';

interface CounterState {
  count: any;
}

class Counter extends React.Component<any, CounterState> {
  constructor(props: any) {
    super(props)
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  }
}

export default Counter
