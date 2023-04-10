import Button from '../Button';
import styles from './movieform.module.scss';
import Select from 'react-select';
import React from 'react';

const options = [
    { value: 'Crime', label: 'Crime' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Comedy', label: 'Comedy' }
  ]

export default function MovieForm({movieInfo , callback , onClose}) {

    const [multiSelectValue , setMultiSelectValue] = React.useState('');

    function submitHandler(e) {
        e.preventDefault();
        callback(Object.fromEntries(new FormData(e.target)));
        onClose();
    }

    return (
        <form className={styles.container} data-testid='form' onSubmit={submitHandler}>
            <div className={styles.container__main}>
                <aside className={styles.container__main__leftSide}>
                    <div>
                        <label htmlFor='title'>TITLE</label>
                        <input type='text' id='title' name='title' value={movieInfo && movieInfo.movieName}/>
                    </div>
                    <div>
                        <label htmlFor='url'>MOVIE URL</label>
                        <input type='url' id='url' name='url' placeholder='htpps://' value={movieInfo && movieInfo.imgURL}/>
                    </div>
                    <div>
                        <label htmlFor='genre'>Genre</label>
                        <input style={{'display': 'none'}} value={multiSelectValue}/>
                        <Select name='genre' isMulti options={options} className={styles.container__main__leftSide__customSelect} />
                    </div>
                </aside>
                <aside className={styles.container__main__rightSide}>
                    <div>
                        <label htmlFor='date'>RELEASE DATE</label>
                        <input type='date' id='date' name='date' value={movieInfo && movieInfo.releaseYear + "-01-01"}/>
                    </div>
                    <div>
                        <label htmlFor='rating'>RATING</label>
                        <input type='number' id='rating' name='rating' value={movieInfo && movieInfo.rating}/>
                    </div>
                    <div>
                        <label htmlFor='runtime'>RUNTIME</label>
                        <input type='text' id='runtime' name='runtime' placeholder='runtime' value={movieInfo && movieInfo.duration}/>
                    </div>
                </aside>
            </div>
            <div className={styles.container__overview}>
                <label htmlFor='description'>OVERVIEW</label>
                <textarea id='description' placeholder='Movie Description' name='description' value={movieInfo && movieInfo.description}/>
            </div>
            <div className={styles.container__buttons}>
                <Button btnClass='secondary' text='RESET'/>
                <Button type='submit' btnClass='primary' text='SUBMIT'/>
            </div>
        </form>
    )
}