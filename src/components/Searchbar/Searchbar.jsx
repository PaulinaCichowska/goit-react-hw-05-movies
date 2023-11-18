import css from './Searchbar.module.css'

export const Searchbar = ({ onChange, value, onSubmit }) => (
    <>
        <div className={css.cover}>
            <form onSubmit={onSubmit} className={css.form} >
                <div className={css.tb}>
                    <div className={css.td}>
                        <input
                            id="myInput"
                            name="search"
                            onChange={onChange}
                            value={value}
                            className={css.input}
                            type="text"
                            placeholder="Search"
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                    <div className={css.td}>
                        <button type="submit" className={css.button}>
                            <div className={css.sCircle}></div>
                            <span className={css.span}></span>
                        </button>
                    </div>
                </div>
            </form>
        </div >
    </>
)