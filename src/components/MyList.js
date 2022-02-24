import {Box, List, ListItem, ListItemButton, ListItemIcon, Typography} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import {v1} from 'uuid';

export const MyList = ({data = [], renderItem}) => {
    return (
        <Box sx={{width: '100%', maxWidth: 500, bgcolor: 'background.paper', paddingLeft: 2, marginTop: 2}}>
            <List>
                {data.map((item, i) => (

                    <ListItem  key={v1()}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CodeIcon color='success'/>
                            </ListItemIcon>
                            <li key={i}><Typography variant='h5'>{renderItem(item)}</Typography></li>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List></Box>
    );
}

