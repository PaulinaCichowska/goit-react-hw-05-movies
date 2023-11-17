const posterPath = 'https://image.tmdb.org/t/p/original/'

export const Details = ({ data }) => {
    return (
        <div>
            <h2> {data.title}  </h2>
            <p>{data.release_data}</p>
            <img
                src={posterPath + data.poster_path}
                alt={data.title}
                width={400}
                height={300}
            />
            <p >Rate {Math.floor(data.vote_average)}/10</p>
            <h3>Description</h3>
            <p>{data.overview}</p>
            <div>
                <p>Genres:</p>
                <ul>
                    {data.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}