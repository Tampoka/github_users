import {Fetch} from '../common/Fetch';
import {RepoInfo} from './RepoInfo';
import RepoMenu from './RepoMenu';


export const UserRepositories = ({login, onSelect = f => f}) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({data}) => (
                <RepoMenu
                    repositories={data}
                    onSelect={onSelect}
                />
            )}
        />
    )
}
