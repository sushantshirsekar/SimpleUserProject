import React, { useState } from "react";
import "./App.css";
import NewUser from "./Components/UserForm/NewUser";
import User from "./Components/UserForm/User";

function App() {
  let arrOfData = [
    { id: "1", name: "Dummy", age: "25" },
    { id: "2", name: "Dummy1", age: "26" },
  ];
  const [enteredData, setEnteredData] = useState(arrOfData);
  const dataAddition = (user) => {
    setEnteredData((prevData) => {
      return [user, ...prevData];
    });
    console.log(enteredData);
    console.log("In app js");
  };
  return (
    <div>
      <h2>User Details</h2>
      <NewUser dataHandler={dataAddition} />
      <User items={enteredData} />
    </div>
  );
}

export default App;
