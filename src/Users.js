import React from 'react';
import { FetchData } from './FetchData';

const url = 'https://api.github.com/users';

function Users({ find }) {

    const { currentUser, isLoading, isError } = FetchData(url, find);

    if (isLoading) {
        return (
            <div className='centered'><h1>Loading...</h1></div>
        );
    }
    if (isError) {
        return (
            <div className='centered'><h1>Couldn't Fetch Data</h1></div>
        );
    }
    return (
        <ul className='users'>
            {currentUser.map(user => {
                const { id, login, avatar_url, html_url, type } = user;
                return (
                    <li key={id}>
                        <img src={avatar_url} alt="img-unavailable" />
                        <a href={html_url} target="_blank" rel='noreferrer'><h3>{login}</h3></a>
                        <h4>{type}</h4>
                    </li>
                );
            })}
        </ul>
    );
}

export default Users;