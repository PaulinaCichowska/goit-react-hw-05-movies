
import PropTypes from 'prop-types';
import css from "./Movies.module.css"

export const Movies = ({ data }) => (
    <div className={css.container}>
        <ul className={css.list}>
            {data.map((elem) => {
                return <li className={css.listItem} key={elem.id}></li>
            })}
        </ul>
    </div>
)

Movies.propTypes = {
    data: PropTypes.array,
}