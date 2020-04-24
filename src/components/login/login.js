import React, { Component, useContext, useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import './login.css'
import Axios from 'axios'
import { AuthContext } from '../../context/auth';
import * as  jwt_decode from 'jwt-decode';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { isLoggedIn, setIsLoggedIn } = useState('');
    const { authToken, isLoggedIn, authTokenAuthorities, saveAuthToken, setIsLoggedIn, saveAuthTokenAuthorities } = useContext(AuthContext);

    const handleUserNameChange = (newUserName) => {
        console.log(newUserName);
        setUsername(newUserName);
    }
    const handlePasswordChange = (newPassword) => {
        console.log(newPassword);
        setPassword(newPassword);
    }
    const postLogin = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:8080/api/auth/login", {
            username,
            password
        }).then(response => {
            if (response.status === 200) {
                console.log(response);
                console.log(response.headers.authorization);
                let token = response.headers.authorization;
                let jwtToken = token.substring(7);
                let decoded = jwt_decode(jwtToken)
                saveAuthTokenAuthorities(decoded);
                setIsLoggedIn(true);
                saveAuthToken(response.headers.authorization);
            }

        }).catch(error => console.log(error));
    }


    if (isLoggedIn) {
        return <Redirect to='/'></Redirect>
    }
    return (
        <div className='container' >
            <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" id="userName" aria-describedby="emailHelp"
                        placeholder="Enter username" onChange={(e) => handleUserNameChange(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password"
                        placeholder="Enter Password" onChange={(e) => handlePasswordChange(e.target.value)} />
                </div>
                {/* <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                <button type="submit" className="btn btn-primary" onClick={e => postLogin(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Login
