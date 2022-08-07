import { Component } from "react";

class TestClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rudresh",
      company: "TCS",
      details:{
        age:18,
        region:'India'
      }
    };
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState(() => {
             return {
                name: "tanmay",
                details:{
                  age:20,
                  region:'india'
                }
              }
            },()=>{
              console.log(this.state)
            });
          }}
        >
          HI there
        </button>
        {this.state.name} {this.state.company}
        <p>
          {this.state.details.age} {this.state.details.region}
        </p>
      </>
    );
  }
}
export default TestClass;
