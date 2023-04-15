// import packages
import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'

// import styling
import styles from './movietile.module.scss';

//import utills & components
import { SeparatorBetweenGenres } from './utills/separator';
import Options from '../Options';

export default function MovieTile({movieInfo , callback}) {
    const [showOptions , setShowOptions] = React.useState(false);
    const {poster_path , title , release_date , genres} = movieInfo;
    const separator = SeparatorBetweenGenres(genres);

     function toggleOptionsWithPropagation(e) {
        e.stopPropagation()
        setShowOptions(prev => !prev)
     }

    return (
        <section aria-label='movieTile' className={styles.container} >
            <div className={styles.container__icon} onClick={e => toggleOptionsWithPropagation(e)}>
                <BsThreeDotsVertical />
            </div>
            {showOptions && <div className={styles.container__options}><Options toggleOptionsWithPropagation={toggleOptionsWithPropagation}/></div>}
            <figure className={styles.container__figure}>
                <img src={poster_path} alt="movieTile" />
                <figcaption className={styles.container__figure__figcaption}>
                    <div className={styles.container__figure__figcaption__main} onClick={callback}>
                        <span>{title}</span>
                        <span>{release_date.substring(0, 4)}</span>
                    </div>
                    <div className={styles.container__figure__figcaption__genres}>
                        {genres.map((item , i , list) =>
                            <React.Fragment key={item}>
                                {i + 1 !== list.length ? <span>{item}{separator}</span> : <span>{item}</span>}
                            </React.Fragment>
                        )}
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}