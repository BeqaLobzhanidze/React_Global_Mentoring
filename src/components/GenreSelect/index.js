// import packages
import React from 'react';
import { useSearchParams } from 'react-router-dom';

//import styling
import styles from './genreselect.module.scss';

export default function GenreSelect({genres , selectedGenre , onSelect}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [genre , setGenre] = React.useState(searchParams.get('genre')?.toUpperCase() || selectedGenre || 'ALL');

    function genreHandleClick(option) {
        onSelect(option.name);
        setGenre(option.name);
        const existingParams = Object.fromEntries(searchParams.entries());
        const newParams = { genre : option.name === "ALL" ? "" : option.name };
        const mergedParams = { ...existingParams, ...newParams };
        setSearchParams(new URLSearchParams(mergedParams));
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
