import React from 'react';
import {DetailedUser} from './DetailedUser';
import {Fetch} from '../common/Fetch';
import {Card, Stack} from '@mui/material';

export const User = ({login}) => {

    return (
        <Card
            sx={{
                maxWidth: '80vw',
                p: 5,
                margin: 'auto',
                marginTop: 5,
                flexGrow: 1,
            }}>
            <Stack alignItems="center"
                   spacing={5}>
            <Fetch
                uri={login ? `https://api.github.com/users/${login}` : ''}
                renderSuccess={DetailedUser}/>
        </Stack>
</Card>
)
}

