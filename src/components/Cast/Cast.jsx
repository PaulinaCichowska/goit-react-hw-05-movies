import { fetchDataCast } from "api/fetchDataCast";
import { useSearchContext } from "components/Context/searchContext";
import { useState, useEffect } from "react";
import css from './Cast.module.css'

export const Cast = () => {
    const { id } = useSearchContext();
    const [cast, setCast] = useState(null)

    const fetchMovies = async (id) => {
        const newCast = await fetchDataCast(id);
        setCast([...newCast]);
    }

    useEffect(() => {
        fetchMovies(id)
    }, [id])

    return (
        <><ul className={css.ul}>
            {cast && cast.map(person => <li className={css.listItem} key={person.id}>
                <img
                    src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : 'https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg'}
                    alt={person.name}
                    className={css.img}
                />
                <h3 className={css.name}>{person.name}</h3>
                <p className={css.role}>Role: {person.character}</p>
            </li>)}
        </ul>
        </>
    )
}