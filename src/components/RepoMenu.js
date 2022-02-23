import React from 'react';
import {RepoInfo} from './RepoInfo';

const RepoMenu = ({repositories, selected, onSelect = f => f, login}) => {
    if (!repositories.length) return <p>No repositories found...</p>

    return <RepoInfo repositories={repositories}
                     onSelect={onSelect}
                     login={login}/>
};

export default RepoMenu;