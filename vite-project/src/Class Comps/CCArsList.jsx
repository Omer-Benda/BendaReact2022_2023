import { Component, useDebugValue } from "react";

const InitcarsList = [
  { id: 1, lp: '11-22-33', model: 'bmw', speed: 200 },
  { id: 2, lp: '22-33-44', model: 'volvo', speed: 250 }];

export default class CCArsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: InitcarsList,
      counter:InitcarsList.length
    };
  }

  render() {
    return (
      <div>
        <div>List:</div>


      </div>



    );
  }
}

