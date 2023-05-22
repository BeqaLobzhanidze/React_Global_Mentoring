// import styling
import styles from './moviedetails.module.scss';

// import packages
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

//import assets and utils
import { SeparatorBetweenGenres , Duration } from '../MovieTile/utills/separator';
import Poster from '../Poster';
import Images from '../../assets';
import Image from 'next/image';

export default function MovieDetails({selectedMovie}) {

    const separator = selectedMovie && SeparatorBetweenGenres(selectedMovie.genres);

    return (
        <>
            {selectedMovie ? <section className={styles.container} aria-label='movie description'>
            <div className={styles.container__header}>
                <figure>
                    <Image width={0} height={0} src={Images.Netflix} alt='netflix'/>
                </figure>
                <div>
                    <Link href='/'>
                        <BsSearch size={25} color='white'/>
                    </Link>
                </div>
            </div>
            <div className={styles.container__details}>
                <figure>
                    <Poster src={selectedMovie.poster_path}/>
                </figure>
                <div className={styles.container__details__rightSide}>
                    <div className={styles.container__details__rightSide__title}>
                        <h2 data-testid='moviedetail_title'>{selectedMovie.title}</h2>
                        <span>{selectedMovie.vote_average}</span>
                    </div>
                    <p className={styles.container__details__rightSide__genres}>
                        {selectedMovie.genres.map((item , i , list) =>
                            <React.Fragment key={item}>
                                {i + 1 !== list.length ? <span>{item}{separator}</span> : <span>{item}</span>}
                            </React.Fragment>
                        )}
                    </p>
                    <div className={styles.container__details__rightSide__overallinfo}>
                        <span>{selectedMovie.release_date.substring(0,4)}</span>
                        <span>{Duration(selectedMovie.runtime)}</span>
                    </div>
                    <p className={styles.container__details__rightSide__description}>{selectedMovie.overview}</p>
                </div>
            </div>
        </section> : <> Loading ...</>}
    </>
    )
}