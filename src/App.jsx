import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component {
  add = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  minus = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    const { count } = this.props;
    return (
      <>
        <h1>The count is {count}</h1>
        <buttton onClick={this.add}>Add</buttton>
        <buttton onClick={this.minus}>Minus</buttton>
        <buttton onClick={this.reset}>Reset</buttton>
      </>
    );
  }
}
function mapStateToProps(state) {
  return { count: state.count };
}
 
export default connect(mapStateToProps)(App);