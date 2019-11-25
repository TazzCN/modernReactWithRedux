import React from 'react';
import useResources from './useResources';

const UserList = () => {

    const users = useResources('users');

    const renderList = (user) => <li key={user.id}>{user.name}</li>;

    return (
        <div>
            <ul>
                {users.map((user) => renderList(user))}
            </ul>
        </div>
    );

    
}

export default UserList;