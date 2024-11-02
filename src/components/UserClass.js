import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0,
            count1:0

        }
        console.log(this.props.name + " constructor");
    }

    componentDidMount(){
        console.log(this.props.name +  " componentDidMount");
    }

    render() {

        const {name,address} = this.props;
        const {count} = this.state;
        console.log(this.props.name + " render")

        return (
            <div className="user-card">
                <h4>Count : {count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                
                    });
                    
                }}>Count Increase</button>
                
                <h2>Name : {name}</h2>
                <h3>Address : {address}</h3>
                <h3>Contact : @anurag1224</h3>
            </div>
        );
    }
}

export default UserClass; 