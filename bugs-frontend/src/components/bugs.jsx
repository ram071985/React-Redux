import React, { Component } from "react";
import StoreContext from '../contexts/storeContext';

class Bugs extends Component {
  static contextType = StoreContext;

  componentDidMount() {
      // subscribe
      // dispatch
      console.log(this.context);
  }
  render() {
    return <div>Bugs</div>;
  }
}
export default Bugs;
