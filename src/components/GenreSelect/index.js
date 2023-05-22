// import packages
import React from 'react';
import { useRouter } from 'next/router';
// import { useSearchParams } from 'react-router-dom';

//import styling
import styles from './genreselect.module.scss';

export default function GenreSelect({genres , selectedGenre , onSelect}) {

    const { query , push } = useRouter();
    const [genre , setGenre] = React.useState(query.genre?.toUpperCase() || selectedGenre || 'ALL');

    function genreHandleClick(option) {
        onSelect(option.name);
        setGenre(option.name);
        push({ query: { ...(query || {}), genre: option.name } });
    }

    return (
        <div className={styles.container}>
            <ul className={styles.container__list}>
                {genres.map(option => (
                   <li
                        key={option.id} 
                        className={`${genre === option.name && styles.container__list__active}`}
                        data-testid= {`${genre === option.name && "active-genre"}`}
                        onClick={() => genreHandleClick(option)}>
                            {option.name}
                    </li>
                ))
               }
            </ul>
        </div>
    )
}
