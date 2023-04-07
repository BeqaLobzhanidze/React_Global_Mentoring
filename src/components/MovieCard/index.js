import MovieTile from '../MovieTile';
import styles from './moviecard.module.scss';

export default function MovieCard({movieInfo , setOpenDetails}) {
    return (
        <div className={styles.container}>
            <h3 className={styles.container__amount}><span>{movieInfo.length}</span> movies found</h3>
            <div className={styles.container__movies}>
                {movieInfo.map(item => <><MovieTile movieInfo={item} callback={() => setOpenDetails(prev => !prev)}/></>)}
            </div>
        </div>
    )
}