import getLogin from "../../service/api"

function User() {
    const id = localStorage.id

    console.log(id, "id")

    const connexion = async function(event) {
        event.preventDefault();

        const logUser = await getLogin(id)

    }

    console.log(connexion, "connexion")

    // const editButton = document.getElementById("editButton")

    // editButton.addEventListener ("click", async function(event){
    //     event.stopPropagation();

    // })


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button" id="editButton">Edit Name</button>
            </div>
            {/* <div className="editUser">
                <h1>Edit user info</h1>
                <form>
                    <div className="User-edit-infos">
                        <div className="User-infos">
                            <label>User name: </label>
                            <input className="user-info-input" type="username" id="username" name="username" />
                        </div>
                        <div className="User-infos">
                            <label>First name: </label>
                            <input className="user-info-input" type="firstname" id="firstname" name="firstname" />
                        </div>
                        <div className="User-infos">
                            <label>Last name: </label>
                            <input className="user-info-input" type="lastname" id="lastname" name="lastname" />
                        </div>
                    </div>
                    <div className="editUser-block">
                        <button className="editUser-button" id="saveButton">Save</button>
                        <button className="editUser-button" id="cancelButton">Cancel</button>
                    </div>
                </form>
            </div> */}
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
}
  
export default User;