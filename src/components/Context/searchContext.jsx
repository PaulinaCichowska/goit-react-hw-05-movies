
import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);


export const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [id, setId] = useState("");

    const changeSearchValue = (value) => {
        setSearch(value)
    };
    const changeId = (newId) => {
        setId(newId)
    };


    return (
        <SearchContext.Provider value={{ search, changeSearchValue, changeId, id }}>
            {children}
        </SearchContext.Provider>
    );
};