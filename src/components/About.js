// import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }



  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>This is about us page</h1>
        {/* <User name = {"Anurag (Function)"}/> */}
        <UserClass />
        
        
      </div>
    );
  }
}

export default About;
