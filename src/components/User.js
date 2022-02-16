import React, {useState} from 'react';
import {DetailedUser} from './DetailedUser';
import {Search} from '../common/Search';
import {Fetch} from '../common/Fetch';

export const User = () => {
    const [login, setLogin] = useState('PharaohKJ')
    const onSearchHandler = (searchValue) => {
        setLogin(searchValue)
    }
    return (
        <>
            <Search placeholder={'GitHub user name'} onSearch={onSearchHandler}/>
            <Fetch
                uri={login?`https://api.github.com/users/${login}`:''}
                renderSuccess={DetailedUser}/>
        </>
    )
}