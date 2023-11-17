import { NavLink, Outlet } from "react-router-dom"
import css from './Navigation.module.css'
export const Navigation = () => (
    <div>
        <nav className={css.nav} >
            <NavLink to="/" className={css.navLink}  >
                <span className={css.span1}></span>
                <span className={css.span2}></span>
                <span className={css.span3}></span>
                <span className={css.span4} ></span>
                Home
            </NavLink >
            <NavLink to="/movies" className={css.navLink} >
                <span className={css.span1}></span>
                <span className={css.span2}></span>
                <span className={css.span3}></span>
                <span className={css.span4} ></span>
                Movies
            </NavLink>
        </nav>
        <Outlet />
    </div>
)