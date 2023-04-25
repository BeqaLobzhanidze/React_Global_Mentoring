import React from 'react';
import MovieTile from '../MovieTile';
import styles from './moviecard.module.scss';

export default function MovieCard({movieInfo , setSelectedMovie}) {
    return (
        <div className={styles.container}>
            { movieInfo.length ?
            <>
                <h3 className={styles.container__amount}><span>{movieInfo && movieInfo.length}</span> movies found</h3>
                <div className={styles.container__movies} data-testid="movies">
                    {movieInfo.map(item => <React.Fragment key={item.title}><MovieTile movieInfo={item} /></React.Fragment>)}
                </div>
            </> :
            <>
               <div>Loading ...</div>
            </> }
        </div>
    )
}