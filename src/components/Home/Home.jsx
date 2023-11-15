import { Searchbar } from "components/Searchbar/Searchbar"
import { Movies } from '../Movies/Movies'
import { fetchTrendingData } from 'api/fetchTrendingData.js'
export const Home = ({ onSubmit, }) => {

    return (<>
        <header >
            <Searchbar onSubmit={onSubmit} ></Searchbar>
        </header>
        <div>
            <Movies data={fetchTrendingData()} ></Movies>
        </div>
    </>
    )

}