
import React, {useState} from "react";


const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredAge === '' || enteredUserName === '')
    {
      return(
        alert('Plss enter Details')
      );
    }
    if(enteredAge <= 0)
    {
      return(
      alert('Invalid Age')
      )
    }
    const data = {
      name: enteredUserName,
      age: enteredAge,
    };
    setEnteredAge('');
    setEnteredUserName('');
    props.onAddUser(data);

  }
  return (

    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name:</label>
          <input onChange={userNameHandler} type="text"  value={enteredUserName}/>
        </div>
        <div>
          <label>Age:</label>
          <input type="number" onChange={ageHandler} value={enteredAge}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
