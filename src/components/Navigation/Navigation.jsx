import { NavLink, Outlet } from "react-router-dom"
export const Navigation = () => (
    <div>
        <nav >
            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/movies" >
                Movies
            </NavLink>
        </nav>
        <Outlet />
    </div>
)