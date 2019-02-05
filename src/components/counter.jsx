import React, { Component } from "react";

class Counter extends Component {
  //difference between state and props
  //state = includes data that is local or private to that component other components cannot assess state.
  //props = includes data that we give to a component. is writ only.

  componentDidUpdate(prevProps, prevState) {
    // Called after a component is updated which means there is a new state or new props, so you can compare new state to old state or new props to old props and if there is a change we can make an AJAX request from the sever to get new data.
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX call and get new data from the server
    }
  }

  componentWillUnmount() {
    // This method is called just before a componnent is removed from the DOM.
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Renedered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
