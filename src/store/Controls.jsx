import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from "../store/types";
class Controls extends Component {

  add = () => {
    this.props.dispatch({ type: INCREMENT });
  };

  minus = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <>
        {/* <buttton onClick={this.add}> Add </buttton>
        <buttton onClick={this.minus}> Minus </buttton>
        <buttton onClick={this.reset}> Reset </buttton> */}

        <button
          onClick={this.add}
          style={{ backgroundColor: "Green", color: "white", padding: "10px" }}
        >
          Add
            </button>
            
        <button
          onClick={this.add}
          style={{ backgroundColor: "Yellow",padding: "10px" }}
            >
                
        Minus
            </button>
            
        <button
          onClick={this.add}
          style={{ backgroundColor: "Red",padding: "10px" }}
        >
          Reset
        </button>
      </>
    );
  }
}

 
export default connect()(Controls);