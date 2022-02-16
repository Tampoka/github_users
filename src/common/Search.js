import React from 'react';
import {useInput} from '../hooks/useInput';

export const Search = ({placeholder='',onSearch=f=>f}) => {
    const [searchProps, resetSearch] = useInput('')

    const onSearchHandler=()=>{
        onSearch(searchProps.value)
        resetSearch()
    }
    return (
        <>
            <input {...searchProps}
                   type="text"
                   placeholder={placeholder}
                   required/>
            <button onClick={onSearchHandler}>Search</button>
        </>
    );
};

