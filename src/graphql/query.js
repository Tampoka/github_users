import {GraphQLClient} from "graphql-request";

export const query = `
query findRepos($login:String!) {
user(login:$login) {
login
name
location
avatar_url: avatarUrl
repositories(first:100) {
totalCount
nodes {
name
}
}
}
}
`;
export const client = new GraphQLClient(
    "https://api.github.com/graphql",
    {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`
        }
    }
);