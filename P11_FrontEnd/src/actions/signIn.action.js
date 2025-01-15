import axios from "axios";

export const GET_POSTS = "GET_POSTS";

export const signIn = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5173/SignIn").then((res) => {
            console.log(res)
        });
    }
}