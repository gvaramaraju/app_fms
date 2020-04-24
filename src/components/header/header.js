import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import {
    Link
} from "react-router-dom";

export default function Header() {
    const { isLoggedIn, authTokenAuthorities } = useContext(AuthContext);

    const getAdminLink = (isLoggedIn) => {
        if (!authTokenAuthorities || authTokenAuthorities === '') {
            return null;
        }
        const authorities = authTokenAuthorities.authorities;
        var isAdmin = authorities.find(({ authority }) => authority === "ROLE_ADMIN")
        return isAdmin && <li className="nav-item">
            <Link className="nav-link" to='/admin'>Admin Page</Link>
        </li>
    }
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">FMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    {isLoggedIn ? <li className="nav-item">
                        <Link className="nav-link" to='/logout'>Logout</Link>
                    </li> : <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login</Link>
                        </li>}
                    {getAdminLink()}
                    <li className="nav-item active">
                        <Link className="nav-link" to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <h3>{authTokenAuthorities && authTokenAuthorities.sub}</h3>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
}
