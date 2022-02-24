import {useCallback, useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import {Box} from '@mui/material';
import {useMountedRef} from '../hooks/useMountedRef';

export const RepositoryReadme = ({repo, login}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [markdown, setMarkdown] = useState("")

    const mounted = useMountedRef()

    const loadReadme = useCallback(async (login, repo) => {
        setLoading(true)
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        const {download_url} = await fetch(uri)
            .then(res => res.json())
        const markdown = await fetch(download_url)
            .then(res => res.text())
        if (mounted.current) {
            setMarkdown(markdown)
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (!repo || !login) return
        loadReadme(login, repo).catch(setError)
    }, [repo])

    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }
    if (loading) return <p>Loading...</p>

    if (!markdown) return <p>No Readme file found...</p>

    return (
        <Box sx={{border: '3px solid white', padding: 3, marginTop: 3}}>
            <ReactMarkdown children={markdown ? markdown : ""}/>
        </Box>);
};
