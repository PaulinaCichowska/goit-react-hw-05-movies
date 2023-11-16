import css from './MoviesItem.module.css'
import { useNavigate } from "react-router-dom";
import { useSearchContext } from 'components/Context/searchContext';
import { useLocation } from 'react-router-dom';

const posterPath = 'https://image.tmdb.org/t/p/original/'


export const MoviesItem = ({ data }) => {
    const { search, changeSearchValue, id, changeId } = useSearchContext();

    const navigate = useNavigate();
    const Click = (e) => {

        console.log(e.currentTarget.id)
        const newId = e.currentTarget.id
        changeId(newId)
        navigate(`/movies/:${newId}`)
    }

    return (
        < li className={css.listItem} onClick={Click} id={data.id}  >
            <p> {data.title} </p>
            <img className={css.img} src={posterPath + data.poster_path} />
        </li >

    )


}

