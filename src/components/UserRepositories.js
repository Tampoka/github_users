import {Fetch} from '../common/Fetch';
import {RepoMenu} from './RepoMenu';


export const UserRepositories = ({login, repo,onSelect = f => f}) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({data}) => (
                    <RepoMenu
                    repositories={data}
                    login={login}
                    onSelect={onSelect}
                    selected={repo}
                />
            )}
        />
    )
}
