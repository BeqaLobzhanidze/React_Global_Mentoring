// import styling
import styles from './moviedetails.module.scss';

// import packages
import React from 'react';
import { BsSearch } from 'react-icons/bs';

//import assets and utils
import { SeparatorBetweenGenres , Duration } from '../MovieTile/utills/separator';
import netflix from '../../assets/netflixroulette copy.png';
import Poster from '../Poster';

export default function MovieDetails({ movieDetailInfo ,setSelectedMovie }) {

    const {poster_path , title , release_date , genres , vote_average , runtime , overview} = movieDetailInfo;
    const separator = SeparatorBetweenGenres(genres);

    return (
            <section className={styles.container} aria-label='movie description'>
                <div className={styles.container__header}>
                    <figure>
                        <img src={netflix} alt='netflix'/>
                    </figure>
                    <div onClick={() => setSelectedMovie(null)}>
                        <BsSearch size={25} color='white'/>
                    </div>
                </div>
                <div className={styles.container__details}>
                    <figure>
                        <Poster src={poster_path}/>
                    </figure>
                    <div className={styles.container__details__rightSide}>
                        <div className={styles.container__details__rightSide__title}>
                            <h2>{title}</h2>
                            <span>{vote_average}</span>
                        </div>
                        <p className={styles.container__details__rightSide__genres}>
                            {genres.map((item , i , list) =>
                                <React.Fragment key={item}>
                                    {i + 1 !== list.length ? <span>{item}{separator}</span> : <span>{item}</span>}
                                </React.Fragment>
                            )}
                        </p>
                        <div className={styles.container__details__rightSide__overallinfo}>
                            <span>{release_date.substring(0,4)}</span>
                            <span>{Duration(runtime)}</span>
                        </div>
                        <p className={styles.container__details__rightSide__description}>{overview}</p>
                    </div>
                </div>
            </section>
    )
}