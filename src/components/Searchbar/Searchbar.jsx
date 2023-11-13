import css from './Searchbar.module.css'

export const Searchbar = ({ onChange, value, onSubmit }) => (
    <>
        <form onSubmit={onSubmit} className={css.form} >
            <label className={css.label} htmlFor="myInput">Search movie</label>
            <input
                id="myInput"
                name="search"
                onChange={onChange}
                value={value}
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
            />
            <button type="submit" className={css.button}>
                <span className="button-label">Search</span>
            </button>
        </form>
    </>
)