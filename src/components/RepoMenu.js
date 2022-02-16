import React from 'react';
import {RepoInfo} from './RepoInfo';

const RepoMenu = ({repositories,onSelect=f=>f}) => {
    if(!repositories.length) return <p>No repositories found...</p>

    return <RepoInfo  repositories={repositories}
                      onSelect={onSelect}/>
};

export default RepoMenu;