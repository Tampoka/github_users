import './App.css';
import {User} from './components/User';
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Paper,
    Slide,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {UserRepositories} from './components/UserRepositories';
import {RepositoryReadme} from './components/RepositoryReadme';
import {Search} from './common/Search';
import {client, query} from './graphql/query';
import {List} from './components/List';
import {useToggle} from './hooks/useToggle';
import {Agreement} from './components/Agreement';

function HideOnScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function App() {
    const [login, setLogin] = useState("Tampoka")
    const [repo, setRepo] = useState("Todo")
    const [userData, setUserData] = useState();
    const [showList, toggleShowList] = useToggle(false);
    const [agree, setAgree] = useState(false);


    const handleSearch = (login) => {
        if (login) return setLogin(login)
        setLogin('')
        setRepo('')
    }

    useEffect(() => {
        client
            .request(query, {login})
            .then(({user}) => user)
            .then(setUserData)
            .catch(error => {
                throw new Error(error.message)
            });
    }, [client, query, login]);


    if (!agree)
        return <Agreement onAgree={() => setAgree(true)}/>;

    if (!login) return (
        <Stack alignItems='center'
               paddingTop={8}>
            <Search onSearch={handleSearch} value={login}/>
        </Stack>
    )

    return (
        <Box sx={{flexGrow: 1}}>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar color='secondary'>
                    <Toolbar id="back-to-top-anchor">
                        <Typography variant="h6" component="div">
                            Logo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Paper
                elevation={3}
                sx={{
                    width: '80vw',
                    minHeight: '80vh',
                    padding: 5,
                    margin: 'auto',
                    backgroundColor: '#ddebff'
                }}>
                <Stack alignItems='center'
                       paddingTop={8}>
                    <Search onSearch={handleSearch} value={login}/>
                </Stack>
                <User login={login}/>
                <UserRepositories login={login} repo={repo} onSelect={setRepo}/>
                <Button variant="outlined" sx={{marginTop: 2}}><Typography variant="h6" onClick={toggleShowList}>
                    Show list of user's repositories</Typography></Button>
                {showList
                    ? <List data={userData.repositories.nodes} renderItem={repo => <span>{repo.name}</span>}/>
                    : <RepositoryReadme login={login} repo={repo}/>}
            </Paper>
        </Box>);
}

export default App;
