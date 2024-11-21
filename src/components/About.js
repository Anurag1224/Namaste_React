// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserInfoContext from "../utils/UserInfoContext";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>This is about us page</h1>
        <div>
          
        <UserInfoContext.Consumer>
          {({loggedInUser}) => <h1 className="font-medium">UserName:  {loggedInUser}</h1>}
          
        </UserInfoContext.Consumer>
        </div>

        {/* <User name = {"Anurag (Function)"}/> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
