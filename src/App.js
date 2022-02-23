import './App.css';
import {User} from './components/User';
import {AppBar, Box, CssBaseline, Fab, Paper, Slide, Toolbar, Typography, useScrollTrigger, Zoom} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

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

function ScrollTop(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };
    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{position: 'fixed', bottom: 16, right: 16}}>
                {children}
            </Box>
        </Zoom>
    );
}

function App() {
    return (
        <Box sx={{flexGrow: 1}}>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar color='secondary' >
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
                <User/>
                <ScrollTop >
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>
            </Paper>
        </Box>);
}

export default App;
