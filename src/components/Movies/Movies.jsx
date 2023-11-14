
import PropTypes from 'prop-types';
import css from "./Movies.module.css"
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const Movies = ({ data }) => (
    <div className={css.container}>
        <ul className={css.list}>
            {data.map((f) => (
                <MoviesItem data={f} />
            ))}
        </ul>
    </div>
)

Movies.propTypes = {
    data: PropTypes.array,
}