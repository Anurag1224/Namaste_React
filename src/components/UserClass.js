import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: "https://dummy_photo"
        }
    };
    // console.log(this.props.name1 + " constructor");

        
  }

  async componentDidMount() {
    // console.log(this.props.name1 +  " componentDidMount");
    const data = await fetch("  https://api.github.com/users/anurag1224");
    const json = await data.json();
    
    this.setState({
        userInfo: json,
    });
  }

  componentDidUpdate(){
    // console.log(this.props.name1 + "Component did update is called");
  }

  componentWillUnmount(){
    // console.log("Component Will Unmount is called");
  }

  render() {
    
    const { name, location,login, avatar_url } = this.state.userInfo;
    // console.log(this.props.name1 + " render");
   
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Address : {location}</h3>
        <h3>Contact : {login}</h3>
      </div>
    );
  }
}

export default UserClass;
