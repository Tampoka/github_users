import React, {useState} from 'react';
import {DetailedUser} from './DetailedUser';
import {Search} from '../common/Search';
import {Fetch} from '../common/Fetch';
import {Card, Stack} from '@mui/material';

export const User = () => {
    const [login, setLogin] = useState('PharaohKJ')

    const onSearchHandler = (searchValue) => {
        setLogin(searchValue)
    }

    return (
        <Card
            sx={{
                maxWidth: 700,
                p: 5,
                margin: 'auto',
                marginTop: 10,
                flexGrow: 1,
                // alignItems:'center',
            }}>
            <Stack alignItems="center"
                   spacing={5}>
            <Search placeholder={'GitHub user name'} onSearch={onSearchHandler}/>
            <Fetch
                uri={login ? `https://api.github.com/users/${login}` : ''}
                renderSuccess={DetailedUser}/>
        </Stack>
</Card>
)
}

