import { useState, useEffect } from "react";
import { useSearchContext } from "components/Context/searchContext";
import { fetchDataReviews } from "api/fetchDataReviews";
export const Reviews = () => {
    const { id } = useSearchContext();
    const [reviews, setReviews] = useState(null)

    const fetchMovies = async (id) => {
        const newReviews = await fetchDataReviews(id);
        setReviews([...newReviews]);
        console.log(newReviews)
    }

    useEffect(() => {
        fetchMovies(id)
    }, [id])

    return (
        <>
            {reviews && reviews.map(review => <li key={review.id}>
                <img
                    src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}` : 'https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg'}
                    alt={review.author}
                    width={300}
                    height={200}
                />
                <h3>{review.author}</h3>
                <p>added {review.updated_at.substring(0, 10)}</p>
                <p>{review.content}</p>
            </li>)}
        </>
    )
}