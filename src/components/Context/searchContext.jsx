
import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

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

SearchContext.propTypes = {
    children: PropTypes.element,
}