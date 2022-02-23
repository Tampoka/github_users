import './App.css';
import {User} from './components/User';
import {AppBar, Box, CssBaseline, Fab, Paper, Slide, Toolbar, Typography, useScrollTrigger, Zoom} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

function HideOnScroll(props) {
    const { children, window } = props;
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
    return (

        <Box sx={{flexGrow: 1}}>
            <CssBaseline />
            <HideOnScroll>
                <AppBar color='secondary'>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Logo
                        </Typography>
                    </Toolbar>
                </AppBar >
            </HideOnScroll>
            <Paper
                elevation={3}
                sx={{
                    width: '80vw',
                    height: '100vh',
                    padding: 5,
                    margin: 'auto'
                }}>
                <User/>
            </Paper>
        </Box>);
}

export default App;
