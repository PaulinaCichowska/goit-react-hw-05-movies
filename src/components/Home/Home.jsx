import { Searchbar } from "components/Searchbar/Searchbar"
import { Movies } from '../Movies/Movies'
export const Home = ({ onSubmit, data }) => {
    return (<>
        <header >
            <Searchbar onSubmit={onSubmit} ></Searchbar>
        </header>
        <div>
            <Movies data={data} ></Movies>
        </div>
    </>
    )

}