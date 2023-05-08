// import styling
import styles from './moviedetails.module.scss';

// import packages
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useParams , Link , useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';

//import assets and utils
import { SeparatorBetweenGenres , Duration } from '../MovieTile/utills/separator';
import netflix from '../../assets/netflixroulette copy.png';
import Poster from '../Poster';

export default function MovieDetails() {

    const { movieID } = useParams();
    const [movieDetailInfo , setMovieDetailInfo] = React.useState(null);
    const separator = movieDetailInfo && SeparatorBetweenGenres(movieDetailInfo.genres);
    const location = useLocation();
    
    React.useEffect(() => {
        axios.get(`http://localhost:4000/movies/${movieID}`).then(data => setMovieDetailInfo(data.data))
    }, [movieID])

    return (
        <>
            {movieDetailInfo ? <section className={styles.container} aria-label='movie description'>
            <div className={styles.container__header}>
                <figure>
                    <img src={netflix} alt='netflix'/>
                </figure>
                <div>
                    <Link to={{
                        pathname: `/`,
                        search: location.search
                    }}>
                        <BsSearch size={25} color='white'/>
                    </Link>
                </div>
            </div>
            <div className={styles.container__details}>
                <figure>
                    <Poster src={movieDetailInfo.poster_path}/>
                </figure>
                <div className={styles.container__details__rightSide}>
                    <div className={styles.container__details__rightSide__title}>
                        <h2>{movieDetailInfo.title}</h2>
                        <span>{movieDetailInfo.vote_average}</span>
                    </div>
                    <p className={styles.container__details__rightSide__genres}>
                        {movieDetailInfo.genres.map((item , i , list) =>
                            <React.Fragment key={item}>
                                {i + 1 !== list.length ? <span>{item}{separator}</span> : <span>{item}</span>}
                            </React.Fragment>
                        )}
                    </p>
                    <div className={styles.container__details__rightSide__overallinfo}>
                        <span>{movieDetailInfo.release_date.substring(0,4)}</span>
                        <span>{Duration(movieDetailInfo.runtime)}</span>
                    </div>
                    <p className={styles.container__details__rightSide__description}>{movieDetailInfo.overview}</p>
                </div>
            </div>
            <Outlet />
        </section> : <> Loading ...</>}
    </>
    )
}