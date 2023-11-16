import css from './MoviesItem.module.css'
import { useNavigate } from "react-router-dom";
import { useSearchContext } from 'components/Context/searchContext';

const posterPath = 'https://image.tmdb.org/t/p/original/'


export const MoviesItem = ({ data }) => {
    const { search, changeSearchValue, id, setId } = useSearchContext();

    const navigate = useNavigate();
    const Click = (e) => {

        console.log(e.currentTarget.id)
        setId(id)
        navigate("/movies/:movieId")
    }

    return (
        < li className={css.listItem} onClick={Click} id={data.id}  >
            <p> {data.title} </p>
            <img className={css.img} src={posterPath + data.poster_path} />
        </li >

    )


}

