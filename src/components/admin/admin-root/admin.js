import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Events from '../../events/events';
import Users from '../../users/users';

function Admin() {
    return (
        <div>
            <h1 className='display-1'>ADMIN PANEL</h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link className="btn btn-secondary" to='/admin/events'>Events</Link>
                <Link className="btn btn-secondary" to='/admin/users'>Users</Link>
                <Link className="btn btn-secondary" to='/admin/events'>Groups</Link>
            </div>

            <Route path="/admin/events">
                <Events />
            </Route>
            <Route path="/admin/users">
                <Users />
            </Route>
        </div >
    )
}

export default Admin;
