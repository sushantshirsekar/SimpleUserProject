import React from "react";
import UserDisplay from "./UserDisplay";

const UserList = (props) => {
    if(props.users.age <= 0)
    {
        return alert('Invalid Age')
    }
    
  return (
    <ul>
      {props.users.map((x) => {
        return <UserDisplay key={x.id} name={x.name} age={x.age} />;
      })}
    </ul>
  );
};
export default UserList;
