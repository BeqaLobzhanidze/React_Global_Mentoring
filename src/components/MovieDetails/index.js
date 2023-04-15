import styles from './moviedetails.module.scss';
import React from 'react';
import { SeparatorBetweenGenres , Duration } from '../MovieTile/utills/separator';

export default function MovieDetails({ movieDetailInfo }) {

    const {poster_path , title , release_date , genres , vote_average , runtime , overview} = movieDetailInfo;
    const separator = SeparatorBetweenGenres(genres);

    return (
        <section className={styles.container} aria-label='movie description'>
            <figure>
                <img src={poster_path} alt="movieTile"/>
            </figure>
            <div className={styles.container__rightSide}>
                <div className={styles.container__rightSide__title}>
                    <h2>{title}</h2>
                    <span>{vote_average}</span>
                </div>
                <p className={styles.container__rightSide__genres}>
                    {genres.map((item , i , list) =>
                        <React.Fragment key={item}>
                            {i + 1 !== list.length ? <span>{item}{separator}</span> : <span>{item}</span>}
                        </React.Fragment>
                    )}
                </p>
                <div className={styles.container__rightSide__overallinfo}>
                    <span>{release_date.substring(0,4)}</span>
                    <span>{Duration(runtime)}</span>
                </div>
                <p className={styles.container__rightSide__description}>{overview}</p>
            </div>
        </section>
    )
}