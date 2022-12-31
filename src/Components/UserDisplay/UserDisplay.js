import React from "react";

import Card from "../Card/Card";

const UserDisplay = (props) => {
  return (
    <li>
      <Card>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </Card>
    </li>
  );
};

export default UserDisplay;
