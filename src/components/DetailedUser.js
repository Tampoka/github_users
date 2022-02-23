import React from 'react';
import {UserRepositories} from './UserRepositories';
import {Avatar, Box, CardHeader, Stack, Typography} from '@mui/material';


export const DetailedUser = ({data}) => {
    return (
        <Box sx={{marginTop:4}}>
            <Stack
                direction="row"
                alignItems="center"
                spacing={5}>
                <Avatar sx={{width: 200, height: 200, objectFit: 'contain'}} variant="circular"
                        src={data.avatar_url}>
                </Avatar>

                <h1>{data.login}</h1>
            </Stack>
            <Typography variant="h6" component="div">
                {data.location && <p>{data.location}</p>}
            </Typography>
            <UserRepositories
                login={data.login}
                onSelect={repoName => console.log(`${repoName} selected`)}
            />
        </Box>
    )
}