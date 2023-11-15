import css from './MoviesItem.module.css'

const posterPath = 'https://image.tmdb.org/t/p/original/'

export const MoviesItem = ({ data }) => {
    return (
        < li className={css.listItem}  >
            <p> {data.title} </p>
            <img className={css.img} src={posterPath + data.poster_path} />
        </li >

    )


}

