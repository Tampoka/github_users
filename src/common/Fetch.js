import {useFetch} from '../hooks/useFetch';


export function Fetch({
                          uri,
                          renderSuccess,
                          loadingFallback = <p>Loading...</p>,
                          renderError = error => (<p>Something went wrong... {error.message}</p>
                          )
                      }) {
    const {loading, data, error} = useFetch(uri)

    if (!uri) return <p>Waiting for userName to load data</p>
    if (loading) return loadingFallback
    if (error) return renderError(error)
    if (data) return renderSuccess({data})
    if(!data) return <p>Ooops</p>
}


