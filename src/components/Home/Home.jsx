import { Searchbar } from "components/Searchbar/Searchbar"

export const Home = ({ onSubmit }) => {
    return (
        <header >
            <Searchbar onSubmit={onSubmit} ></Searchbar>
        </header>
    )

}