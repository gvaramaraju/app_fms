import React, { useState } from 'react'
import axios from '../../axios'
import User from './user'

function Users(props) {
    const [users, setUsers] = useState([])
    const getUsers = () => {
        axios().get('/api/applicationuser/users').then(response => {
            console.log(response)
            setUsers(response.data)
        })
    }

    const userCards = users.map(user => <div><User user={user}></User><br></br></div>)
    return (
        <div>
            <button type='button' className="btn btn-primary" onClick={getUsers}>GET ALL USERS</button>
            {userCards}
        </div>
    )
}

export default Users
