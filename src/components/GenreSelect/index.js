// import packages
import React from 'react';

//import styling
import styles from './genreselect.module.scss';

export default function GenreSelect({genres , selectedGenre , onSelect}) {
    const [genre , setGenre] = React.useState(selectedGenre || 'ALL');
    return (
        <div className={styles.container}>
            <ul className={styles.container__list}>
                {genres.map(option => (
                   <li
                        key={option.id} 
                        className={`${genre === option.name && styles.container__list__active}`}
                        data-testid={`${genre === option.name && "active-genre"}`}
                        onClick={() => {
                            onSelect(option.name);
                            setGenre(option.name);
                        }}>
                            {option.name}
                    </li>
                ))
               }
            </ul>
        </div>
    )
}
