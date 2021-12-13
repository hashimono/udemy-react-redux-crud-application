import React, { Component } from 'react';

const App = () => {
  return <Counter></Counter>;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = {
      count: 0
    };
  }

  countUp = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount + 1
    });
  }

  countDown = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount - 1
    });
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.countUp}>COUNT UP</button>
        <button onClick={this.countDown}>COUNT DOWN</button>
      </React.Fragment>
    )
  }
}

export default App;
