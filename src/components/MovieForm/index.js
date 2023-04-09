import Button from '../Button';
import styles from './movieform.module.scss';

export default function MovieForm({movieInfo , callback}) {
    return (
        <form className={styles.container}>
            <div className={styles.container__main}>
                <aside className={styles.container__main__leftSide}>
                    <div>
                        <label htmlFor='title'>TITLE</label>
                        <input type='text' id='title' value={movieInfo && movieInfo.movieName}/>
                    </div>
                    <div>
                        <label htmlFor='url'>MOVIE URL</label>
                        <input type='url' id='url' placeholder='htpps://' value={movieInfo && movieInfo.imgURL}/>
                    </div>
                    <div>
                        <label htmlFor='genre'>Genre</label>
                        <select id='genre'>
                            <option>option1</option>
                            <option>option1</option>
                            <option>option1</option>
                            <option>option1</option>
                            <option>option1</option>
                        </select>
                    </div>
                </aside>
                <aside className={styles.container__main__rightSide}>
                    <div>
                        <label htmlFor='date'>RELEASE DATE</label>
                        <input type='date' id='date' value={movieInfo && movieInfo.releaseYear + "-01-01"}/>
                    </div>
                    <div>
                        <label htmlFor='rating'>RATING</label>
                        <input type='number' id='rating' value={movieInfo && movieInfo.rating}/>
                    </div>
                    <div>
                        <label htmlFor='runtime'>RUNTIME</label>
                        <input type='text' id='runtime' placeholder='runtime' value={movieInfo && movieInfo.duration}/>
                    </div>
                </aside>
            </div>
            <div className={styles.container__overview}>
                <label htmlFor='description'>OVERVIEW</label>
                <textarea id='description' placeholder='Movie Description' value={movieInfo && movieInfo.description}/>
            </div>
            <div className={styles.container__buttons}>
                <Button btnClass='secondary' text='RESET'/>
                <Button btnClass='primary' text='SUBMIT'/>
            </div>
        </form>
    )
}