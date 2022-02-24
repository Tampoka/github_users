import React, {useEffect} from 'react';
import {useIterator} from '../hooks/useIterator';
import {Button, Chip, Link, Stack, Typography} from '@mui/material';

export const RepoMenu = ({repositories, selected, onSelect = f => f}) => {
    const [{name, description, homepage}, previous, next] = useIterator(repositories,
        selected
            ? repositories.findIndex(repo => repo.name === selected)
            : null)

    useEffect(() => {
        if (!name) return
        onSelect(name)
    }, [name])

    if (!repositories.length) return <p>No repositories found...</p>


    return (
        <div>
            <Stack
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                direction="row">
                <Button variant="contained" color="secondary" onClick={previous}>&lt;</Button>
                <Typography variant="h4">
                    <p style={{width: 400, textAlign: 'center', overflowWrap: "break-word"}}>{name}</p>
                </Typography>
                <Button variant="contained" color="secondary" onClick={next}>&gt;</Button>
            </Stack>
            <Stack spacing={3}>
                {description && <div style={{marginLeft: 30}}><Chip label='Description' color='success'/>
                    <Typography variant="h6" sx={{color:'#C207FF'}}>
                        <p>{description}</p>
                    </Typography>
                </div>}
            </Stack>
            {homepage && <Button variant="outlined">
                <Link href={homepage} target="_blank" rel="noopener noreferrer" underline="hover">
                    <Typography variant="h6">Check website</Typography>
                </Link>
            </Button>}
            <div style={{width: '100%', textAlign: 'center', overflowWrap: "break-word"}}>
            </div>
        </div>
    )


};
