import css from './MoviesItem.module.css'

export const MoviesItem = ({ data }) => {
    return (
        < li className={css.listItem} key={data.id} >
            <p> {data.title} kurwa</p>
        </li >

    )


}

