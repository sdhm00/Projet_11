import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../features/userSlice';
import { useNavigate } from "react-router";

function ModifUser() {
    const loged = useSelector((state) => state.userProfile.loged)
    console.log(loged, "is it loged ?")

    const userName = useSelector((state) => state.userProfile.user.userName)
    console.log(userName, " username data ?")

    const firstName = useSelector((state) => state.userProfile.user.firstName)
    console.log(firstName, " user first name ?")

    const lastName = useSelector((state) => state.userProfile.user.lastName)
    console.log(lastName, " user last name ?")

    let navigate = useNavigate();

    if (loged === false) {
        navigate("/")
    }

    const openEdit = async function(event) {}
    
    return (
        <div>
            {/* {editing ? ( */}
                <div className="header">
                    <h1>Welcome back<br />
                    <div className="userName"> {firstName} {lastName}!</div>
                    </h1>
                    <button className="edit-button" id="editButton" onClick={openEdit}>Edit Name</button>
                </div>
            {/* ) : (
                <div className="editUser">
                    <h1>Edit user info</h1>
                    <form>
                        <div className="User-edit-infos">
                            <div className="User-infos">
                                <label>User name: </label>
                                <input className="user-info-input" type="username" id="username" name="username" value={userName} />
                            </div>
                            <div className="User-infos">
                                <label>First name: </label>
                                <input className="user-info-input" type="firstname" id="firstname" name="firstname" value={firstName} readOnly/>
                            </div>
                            <div className="User-infos">
                                <label>Last name: </label>
                                <input className="user-info-input" type="lastname" id="lastname" name="lastname" value={lastName} readOnly />
                        </div>
                        </div>
                        <div className="editUser-block">
                            <button className="editUser-button" id="saveButton">Save</button>
                            <button className="editUser-button" id="cancelButton">Cancel</button>
                        </div>
                    </form>
                </div>
            )}  */}
        </div>
    )
}
  
export default ModifUser;