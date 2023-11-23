import css from './MoviesItem.module.css'
import { useNavigate } from "react-router-dom";
import { useSearchContext } from 'components/Context/searchContext';
import PropTypes from 'prop-types';

export const MoviesItem = ({ data }) => {
    const { changeId } = useSearchContext();
    const navigate = useNavigate();
    const Click = (e) => {
        const newId = e.currentTarget.id
        changeId(newId)
        navigate(`/movies/${newId}`, { from: "/movies" })
    }

    return (
        < li className={css.listItem} onClick={Click} id={data.id}  >
            <p className={css.title}> {data.title} </p>
            <img alt={data.title} className={css.img} src={data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : "https://fakeimg.pl/300x250?text=no+img&font=bebas"} />
        </li >

    )
}

MoviesItem.propTypes = {
    data: PropTypes.object,
}