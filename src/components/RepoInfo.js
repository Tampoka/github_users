const {useEffect} = require('react');
const {useIterator} = require('../hooks/useIterator');


export const RepoInfo = ({repositories, onSelect = f => f}) => {
    const [{name, description, homepage}, previous, next] = useIterator(repositories)

    useEffect(() => {
        if (!name) return
        onSelect(name)
    }, [name])

    return (
        <div>
            <div style={{display: "flex"}}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <p>Description : {description}</p>
            {homepage && <p><a href={homepage} target="_blank" rel="noopener noreferrer">Check github pages</a></p>}
        </div>
    )
}