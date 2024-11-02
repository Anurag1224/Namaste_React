import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h4>Count : {count}</h4>
            <h4>Count_1 : {count2}</h4>
            <h2>Name : {props.name}</h2>
            <h3>Location : Gumla </h3>
            <h3>Contact : @anurag1224</h3>
        </div>
    );

};

export default User;