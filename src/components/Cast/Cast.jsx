import { fetchDataCast } from "api/fetchDataCast";
import { useSearchContext } from "components/Context/searchContext";
import { useState, useEffect } from "react";

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
        <>
            {cast && cast.map(person => <li key={person.id}>
                <img
                    src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : 'https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg'}
                    alt={person.name}
                    width={300}
                    height={200}
                />
                <h3>{person.name}</h3>
                <p>Role: {person.character}</p>
            </li>)}
        </>
    )
}