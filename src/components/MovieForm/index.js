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

const initialValue = {
    imgURL: '',
    movieName: '',
    releaseYear: '',
    genres: [],
    rating: '',
    duration: '',
    description: ``
  }

export default function MovieForm({movieInfo , callback , onClose}) {

    const [formValues , setFormValues] = React.useState(movieInfo || initialValue)

    const [multiSelectValue , setMultiSelectValue] = React.useState('');

    function submitHandler(e) {
        e.preventDefault();
        callback(Object.fromEntries(new FormData(e.target)));
        onClose();
    }

    function multiSelectChange(option) {
        setMultiSelectValue(option);
    }

    return (
        <form className={styles.container} data-testid='form' onSubmit={submitHandler}>
            <div className={styles.container__main}>
                <aside className={styles.container__main__leftSide}>
                    <div>
                        <label htmlFor='title'>TITLE</label>
                        <input
                                type='text'
                                id='title'
                                name='title'
                                value={formValues.movieName}
                                onChange={ e => setFormValues({...formValues , movieName : e.target.value}) }
                            />
                    </div>
                    <div>
                        <label htmlFor='url'>MOVIE URL</label>
                        <input
                                type='url'
                                id='url'
                                name='url'
                                placeholder='htpps://'
                                value={formValues.imgURL}
                                onChange={ e => setFormValues({...formValues , imgURL : e.target.value}) }
                            />
                    </div>
                    <div>
                        <label htmlFor='genre'>Genre</label>
                        <input style={{'display' : 'none'}} name='genre' value={JSON.stringify(multiSelectValue)} onChange={()=> {}}/>
                        <Select
                                isMulti
                                options={options}
                                className={styles.container__main__leftSide__customSelect} 
                                onChange={multiSelectChange}
                            />
                    </div>
                </aside>
                <aside className={styles.container__main__rightSide}>
                    <div>
                        <label htmlFor='date'>RELEASE DATE</label>
                        <input
                                type='date'
                                id='date'
                                name='date'
                                value={formValues.releaseYear}
                                onChange={ e => setFormValues({...formValues , releaseYear : e.target.value}) }
                            />
                    </div>
                    <div>
                        <label htmlFor='rating'>RATING</label>
                        <input
                                type='number'
                                id='rating'
                                name='rating'
                                value={formValues.rating}
                                onChange={ e => setFormValues({...formValues , rating : e.target.value}) }
                            />
                    </div>
                    <div>
                        <label htmlFor='runtime'>RUNTIME</label>
                        <input
                                type='text'
                                id='runtime'
                                name='runtime'
                                placeholder='runtime'
                                value={formValues.duration}
                                onChange={ e => setFormValues({...formValues , duration : e.target.value}) }
                            />
                    </div>
                </aside>
            </div>
            <div className={styles.container__overview}>
                <label htmlFor='description'>OVERVIEW</label>
                <textarea
                        id='description'
                        placeholder='Movie Description'
                        name='description'
                        value={formValues.description}
                        onChange={ e => setFormValues({...formValues , description : e.target.value}) }
                    />
            </div>
            <div className={styles.container__buttons}>
                <Button btnClass='secondary' text='RESET'/>
                <Button type='submit' btnClass='primary' text='SUBMIT'/>
            </div>
        </form>
    )
}