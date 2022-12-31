import React, {useState} from "react";
import UserForm from "./UserForm";

const NewUser = (props) => {

    const [isForm, setIsForm] = useState(false);

const userData = (data) => {
    const finalData = {
        id:Math.random().toString(),
        ...data,
    }
    props.dataHandler(finalData);
    setIsForm(false);

}
    return <div>
        {!isForm && <UserForm onAddUser = {userData}/>}
    </div>
}
export default NewUser;