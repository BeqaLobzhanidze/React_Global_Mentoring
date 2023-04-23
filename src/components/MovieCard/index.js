import React from 'react';
import MovieTile from '../MovieTile';
import styles from './moviecard.module.scss';

export default function MovieCard({movieInfo , setOpenDetails}) {
    return (
        <div className={styles.container}>
            <h3 className={styles.container__amount}><span>{movieInfo && movieInfo.length}</span> movies found</h3>
            <div className={styles.container__movies}>
                {movieInfo.map(item => <React.Fragment key={item.movieName}><MovieTile movieInfo={item} callback={() => setOpenDetails(prev => !prev)}/></React.Fragment>)}
            </div>
        </div>
    )
}