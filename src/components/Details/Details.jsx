import css from './Details.module.css'
import PropTypes from 'prop-types';

const posterPath = 'https://image.tmdb.org/t/p/original/'

export const Details = ({ data }) => {
    return (
        <div className={css.container}>

            <h2> {data.title} <span className={css.rate}>Rate {Math.floor(data.vote_average)}/10</span> </h2>
            <div className={css.flex}>
                <div>
                    <p>{data.release_data}</p>
                    <img className={css.img}
                        src={posterPath + data.poster_path}
                        alt={data.title}
                    />
                </div>
                <div>
                    <h3>Description</h3>
                    <p className={css.overview}>{data.overview}</p>
                    <div>
                        <p className={css.genere}>Genres:</p>
                        <ul>
                            {data.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
Details.propTypes = {
    data: PropTypes.object,
}