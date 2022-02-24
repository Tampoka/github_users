import {Button, Paper, Stack, Typography} from '@mui/material';

export  function Agreement({ onAgree = f => f }) {
    return (
        <Paper
            elevation={3}
            sx={{
                width: '80vw',
                minHeight: '80vh',
                padding: 5,
                margin: 'auto',
                backgroundColor: '#ddebff',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <div style={{textAlign:'center'}}>
                    <Typography variant='h5'>
                        <p>Terms...</p>
                        <p>These are the terms and stuff. Do you agree?</p>
                    </Typography>
                    <Button onClick={onAgree} variant='contained' color='secondary' size='large'>I agree</Button>
                </div>
        </Paper>
    );
}