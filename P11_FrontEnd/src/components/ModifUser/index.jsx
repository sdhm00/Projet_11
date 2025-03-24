import { useSelector, useDispatch } from 'react-redux';
import { userFirstName, userLastName, userNameProfile, userProfile } from '../../features/userSlice';
import { useState } from 'react';
import { modifProfile } from '../../service/api';

function ModifUser() {
    const dataUser = useSelector((state) => state.userProfile.user)
    console.log(dataUser, "user profile")

    const dataUserFirstName = useSelector((state) => state.userFirstName)
    console.log(dataUserFirstName, "user profile firstname data")

    const dataUserLastName = useSelector((state) => state.userLastName)
    console.log(dataUserLastName, "user profile lastname data")

    const dataUserName = useSelector((state) => state.userNameProfile)
    console.log(dataUserName, "username data")

    const [newUserName, setNewUserName] = useState();
    const [editing, setEditing] = useState(false);

    const dispatch = useDispatch();

    const handleChange = async function(event) {
        event.preventDefault();

        const token = localStorage.getItem("token");
        const usernameChanged = await modifProfile(token, newUserName);
        console.log("New username", usernameChanged);

        dispatch(userNameProfile(usernameChanged.body.userName));
        // dispatch(userProfile());
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
                            <input className="user-info-input" type="username" id="username" name="username" placeholder={dataUserName} onChange={(e) => {setNewUserName(e.target.value)}} />
                        </div>
                        <div className="User-infos">
                            <label>First name: </label>
                            <input className="user-info-input" type="firstname" id="firstname" name="firstname" placeholder={dataUserFirstName} readOnly disabled/>
                        </div>
                        <div className="User-infos">
                            <label>Last name: </label>
                            <input className="user-info-input" type="lastname" id="lastname" name="lastname" placeholder={dataUserLastName} readOnly disabled/>
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
                    <div className="userName"> {dataUserFirstName} {dataUserLastName}!</div>
                </h1>
                <button className="edit-button" id="editButton" onClick={() => setEditing(true)}>Edit Name</button>
            </div>
            )} 
        </div>
    )
}
  
export default ModifUser;