import React from 'react'

function User(props) {
    const { firstName, lastName, preferredName, authorities } = props.user;
    const authList = authorities.map(authority => <li className="list-group-item">{authority}</li>)
    const cardStyle = {
        width: '18rem'
    }
    return <div className="card  bg-primary mb-3" style={cardStyle} >
        <div className="card-body">
            <h5 className="card-title">{preferredName} {lastName}</h5>
            <div className='card-text'>
                <ul class="list-group list-group-flush">
                    {authList}
                </ul>
            </div>
        </div>
    </div>

}

export default User
