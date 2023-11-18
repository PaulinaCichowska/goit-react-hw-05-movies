import { useState, useEffect } from "react";
import { useSearchContext } from "components/Context/searchContext";
import { fetchDataReviews } from "api/fetchDataReviews";
import css from './Reviews.module.css'


export const Reviews = () => {
    const { id } = useSearchContext();
    const [reviews, setReviews] = useState(null)

    const fetchMovies = async (id) => {
        const newReviews = await fetchDataReviews(id);
        setReviews([...newReviews]);
    }

    useEffect(() => {
        fetchMovies(id)
    }, [id])

    return (
        <><ul className={css.list}>
            {reviews && reviews.map(review => <li className={css.listItem} key={review.id}>
                <div className={css.box}>
                    <img
                        src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}` : 'https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg'}
                        alt={review.author}
                        className={css.img}
                    />
                    <h3>{review.author}</h3>
                </div>
                <p>{review.content}</p>
                <p className={css.added}>added {review.updated_at.substring(0, 10)}</p>
            </li>)}
        </ul>
        </>
    )
}