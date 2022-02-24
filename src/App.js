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
import React, {useState} from 'react';
import {UserRepositories} from './components/UserRepositories';
import {RepositoryReadme} from './components/RepositoryReadme';
import {Search} from './common/Search';

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

    const handleSearch=(login)=>{
        if(login) return setLogin(login)
        setLogin('')
        setRepo('')
    }

    if (!login) return (
        <Stack alignItems='center'
               paddingTop={8}>
            <Search  onSearch={handleSearch} value={login}/>
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
                    <Search  onSearch={handleSearch} value={login}/>
                </Stack>
                <User login={login}/>
                <UserRepositories login={login} repo={repo} onSelect={setRepo}/>
                <Button variant="outlined" sx={{marginTop:2}}><Typography variant="h6">Show list of user's repositories</Typography></Button>
                <RepositoryReadme login={login} repo={repo}/>
            </Paper>
        </Box>);
}

export default App;
