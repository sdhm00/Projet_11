import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../features/userSlice';
import { useNavigate } from "react-router";
import { useState } from 'react';
import { modifProfile } from '../../service/api';

function ModifUser() {
    const loged = useSelector((state) => state.userProfile.loged)
    console.log(loged, "is it loged ?")

    // const userName = useSelector((state) => state.userProfile.user.userName)
    // console.log(userName, " username data ?")

    const firstName = useSelector((state) => state.userProfile.user.firstName)
    console.log(firstName, " user first name ?")

    const lastName = useSelector((state) => state.userProfile.user.lastName)
    console.log(lastName, " user last name ?")

    const dataUser = useSelector((state) => state.userProfile.user)
    console.log(dataUser.userName, "username data")

    const [newUserName, setNewUserName] = useState();
    const [editing, setEditing] = useState(false);

    const dispatch = useDispatch();

    const handleChange = async function(event) {
        event.preventDefault();

        const token = localStorage.getItem("token");
        const usernameChanged = await modifProfile(token, newUserName);
        console.log("New username", usernameChanged);

        dispatch(userProfile(usernameChanged.body.userName))
        setEditing(false)
    }
    
    return (
        <div>
            {editing ? (
            <div className="editUser">
                <h1>Edit user info</h1>
                <form>
                    <div className="User-edit-infos">
                        <div className="User-infos">
                            <label>User name: </label>
                            <input className="user-info-input" type="username" id="username" name="username" placeholder={dataUser.userName} onChange={(e) => {setNewUserName(e.target.value)}} />
                        </div>
                        <div className="User-infos">
                            <label>First name: </label>
                            <input className="user-info-input" type="firstname" id="firstname" name="firstname" value={firstName} readOnly disabled/>
                        </div>
                        <div className="User-infos">
                            <label>Last name: </label>
                            <input className="user-info-input" type="lastname" id="lastname" name="lastname" value={lastName} readOnly disabled/>
                    </div>
                    </div>
                    <div className="editUser-block">
                        <button className="editUser-button" id="saveButton" onClick={handleChange}>Save</button>
                        <button className="editUser-button" id="cancelButton" onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </form>
            </div>
            ) : (
            <div className="header">
                <h1>Welcome back<br />
                    <div className="userName"> {firstName} {lastName}!</div>
                </h1>
                <button className="edit-button" id="editButton" onClick={() => setEditing(true)}>Edit Name</button>
            </div>
            )} 
        </div>
    )
}
  
export default ModifUser;