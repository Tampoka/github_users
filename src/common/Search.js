import React from 'react';
import {useInput} from '../hooks/useInput';
import {Button, Stack, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({ value, onSearch = f => f}) => {
    const [searchProps] = useInput(value)

    const onSearchHandler = () => {
        onSearch(searchProps.value)
    }

    return (
        <Stack direction="row" spacing={5}>
            <TextField {...searchProps}
                       type="text"
                       required
                       label="GitHub User Name"
                       variant="outlined"
                       size='small'
            />
            <Button onClick={onSearchHandler} variant="contained" startIcon={<SearchIcon/>}>Search</Button>
        </Stack>
    );
};

