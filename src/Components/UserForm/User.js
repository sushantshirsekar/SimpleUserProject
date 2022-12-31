import React from "react";
import UserList from "../UserDisplay/UserList";

const User = (props) => {
    const data = props.items;
    return (
        <div>
            <UserList users={data}/>
        </div>
    );
}
export default User;