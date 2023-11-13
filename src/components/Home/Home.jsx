import { Searchbar } from "components/Searchbar/Searchbar"
import { NavLink } from "react-router-dom"
export const Home = () => {
    return (

        <header >
            {/* <nav>
                <NavLink to="/movies/:movieId">
                    <div><p>co</p></div>
                </NavLink>
            </nav>
            <div><p>co</p></div> */}
            <Searchbar ></Searchbar>

        </header>
    )

}