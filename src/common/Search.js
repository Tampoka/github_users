import React from 'react';
import {useInput} from '../hooks/useInput';
import {Button, Stack, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({placeholder = '', onSearch = f => f}) => {
    const [searchProps, resetSearch] = useInput('')

    const onSearchHandler = () => {
        onSearch(searchProps.value)
        resetSearch()
    }
    return (
        <Stack direction="row" spacing={5}>
            <TextField {...searchProps}
                       type="text"
                       placeholder={placeholder}
                       required
                       label="GitHub User Name"
                       variant="outlined"
            size='small'/>
            <Button onClick={onSearchHandler} variant="contained" startIcon={<SearchIcon/>}>Search</Button>
        </Stack>
    );
};

