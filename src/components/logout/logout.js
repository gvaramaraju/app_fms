import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Redirect } from "react-router-dom";

function Logout() {
    const { setIsLoggedIn, setAuthToken, setAuthTokenAuthorities } = useContext(AuthContext);
    localStorage.removeItem('token');
    localStorage.removeItem('tokenAuthorities')
    setAuthToken('');
    setAuthTokenAuthorities('');
    setIsLoggedIn(false);
    return <Redirect to='/'></Redirect>
}

export default Logout
