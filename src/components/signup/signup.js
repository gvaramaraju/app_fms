import React, { useState } from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

function Signup() {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [preferredName, setPreferredName] = useState('');
    const [userCreated, setUserCreatead] = useState('');


    const postSignUp = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8080/api/applicationuser/users', {
            userName, password, firstName, lastName, preferredName
        }).then(response => {
            if (response.status === 201) {
                setUserCreatead(true)
                console.log(response)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    if (userCreated) {
        return <Redirect to='/login'></Redirect>
    }

    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label>First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <label>Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <label>Preferred Name</label>
                    <input type="text" className="form-control" id="preferredName" placeholder="Preferred Name" onChange={e => setPreferredName(e.target.value)} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>User Name</label>
                    <input type="text" className="form-control" id="username" placeholder="User Name" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                </div>
            </div>


            <button type="submit" className="btn btn-primary" onClick={e => postSignUp(e)}>Sign Up</button>
        </form>
    )
}

export default Signup
