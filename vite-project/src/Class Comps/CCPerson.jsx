import { Component } from "react"

export default class CCPerson extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grade: this.props.grade,
      age: this.props.age,
      name: this.props.name
    };

  }

  btnChangeAge = () => {
    console.log(this.state.age)
    this.setState({
      age: this.state.age + 1,
      grade: this.state.grade + 2,
      hairColor: "red"
    });


  }

  render() {
    return (
      <div className="container" style={{border:'dashed green 2px',padding: 10 }}>
        <h3> my name is {this.props.name}</h3>
        <h4> my grade is {this.state.grade}</h4>
        <h3>my age is {this.props.age} </h3>
        <h3>my age state={this.state.age} </h3>
        <h2>my hair color={this.state.hairColor ? this.state.hairColor : "no no"} </h2>
        <button onClick={this.btnChangeAge}> Click me! </button>

      </div>
    );
  }


}