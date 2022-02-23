import {Button, Link, Stack, Typography} from '@mui/material';

const {useEffect} = require('react');
const {useIterator} = require('../hooks/useIterator');


export const RepoInfo = ({repositories, onSelect = f => f}) => {
    const [{name, description, homepage}, previous, next] = useIterator(repositories)

    useEffect(() => {
        if (!name) return
        onSelect(name)
    }, [name])

    return (
        <div>
            <Stack
               alignItems="center"
                justifyContent="space-between"
                spacing={2}
                direction="row">
                <Button variant="contained" color="secondary" onClick={previous}>&lt;</Button>
                <Typography variant="h4">
                    <p>{name}</p>
                </Typography>
                <Button variant="contained" color="secondary" onClick={next}>&gt;</Button>
            </Stack>
            <Stack spacing={3}>
                <div>Description : <p>{description}</p></div>
            </Stack>
                {homepage && <Link href={homepage} target="_blank" rel="noopener noreferrer" underline="hover">
                    Check github page
                </Link>}
           

        </div>
    )
}