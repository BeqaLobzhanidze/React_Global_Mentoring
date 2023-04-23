import styles from './moviedetails.module.scss';
import React from 'react';
import SeparatorBetweenGenres from '../MovieTile/utills/separator';

export default function MovieDetails({ movieDetailInfo }) {

    const {imgURL , movieName , releaseYear , genres , rating , duration , description} = movieDetailInfo;
    const separator = SeparatorBetweenGenres(genres);

    return (
        <section className={styles.container} aria-label='movie description'>
            <figure>
                <img src={imgURL} alt="movieTile"/>
            </figure>
            <div className={styles.container__rightSide}>
                <div className={styles.container__rightSide__title}>
                    <h2>{movieName}</h2>
                    <span>{rating}</span>
                </div>
                <p className={styles.container__rightSide__genres}>
                    {genres.map((item , i , list) =>
                        <React.Fragment key={item}>
                            {i + 1 !== list.length ? <span>{item}{separator}</span> : <span>{item}</span>}
                        </React.Fragment>
                    )}
                </p>
                <div className={styles.container__rightSide__overallinfo}>
                    <span>{releaseYear}</span>
                    <span>{duration}</span>
                </div>
                <p className={styles.container__rightSide__description}>{description}</p>
            </div>
        </section>
    )
}