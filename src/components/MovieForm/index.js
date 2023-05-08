import Button from '../Button';
import styles from './movieform.module.scss';
import Select from 'react-select';
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const options = [
    { value: 'Crime', label: 'Crime' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Music', label: 'Music' }
  ]

const initialValue = {
    poster_path: '',
    title: '',
    release_date: '',
    genres: [],
    vote_average: '',
    runtime: '',
    overview: ``
  }

export default function MovieForm() {

    const [body , setBody] = React.useState('');
    const { movieID } = useParams();

    React.useEffect(() => {
        if(!movieID) return;

        axios.get(`http://localhost:4000/movies/${movieID}`)
                .then(data => {
                    formik.setValues(data.data);
                });
    }, [movieID])

    React.useEffect(() => {

        if(!body) return;

        const requestMethod = movieID ? axios.put : axios.post;

        requestMethod('http://localhost:4000/movies', body)
            .then(response => {
                window.location.href = '/' + response.data.id;
            })
            .catch(error => {
                console.log(error);
            });

    }, [body])

    const validate = values => {
        const errors = {};
        if (!values.poster_path) {
          errors.poster_path = 'Required';
        } else if (values.poster_path.length > 100) {
          errors.poster_path = 'Must be 100 characters or less';
        }

        if (!values.release_date) {
          errors.release_date = 'Required';
        } else if(values.release_date < Date.now()) {
          errors.release_date = 'release date must be less than today'
        }

        if (!values.title) {
          errors.title = 'Required';
        }

        if(!values.vote_average) {
            errors.vote_average = 'Required';
        } else if(values.vote_average > 10) {
            errors.vote_average = 'vote average should be less than 10'
        }

        if(!values.overview) {
            errors.overview = 'Required';
        }
        return errors;
      };

    const formik = useFormik({
        initialValues: initialValue,
        validate,
        onSubmit: (values) => {
            setBody({...values , tagline: "randomTextToAvoidAxiosError"});
        },
      });

    return (
        <form className={styles.container} data-testid='form' onSubmit={formik.handleSubmit}>
            <div className={styles.container__main}>
                <aside className={styles.container__main__leftSide}>
                    <div>
                        <label htmlFor='title'>TITLE</label>
                        <input
                                type='text'
                                id='title'
                                name='title'
                                data-testid='title'
                                value={formik.values.title}
                                onChange={formik.handleChange}
                            />
                        {formik.errors.title ? <div style={{color: 'red'}}>{formik.errors.title}</div> : null}
                    </div>
                    <div>
                        <label htmlFor='poster_path'>MOVIE URL</label>
                        <input
                                type='url'
                                id='poster_path'
                                name='poster_path'
                                placeholder='https://'
                                data-testid='poster_path'
                                value={formik.values.poster_path}
                                onChange={formik.handleChange}
                            />
                        {formik.errors.poster_path ? <div style={{color: 'red'}}>{formik.errors.poster_path}</div> : null}
                    </div>
                    <div>
                        <label htmlFor='genres'>Genre</label>
                        <Select
                                isMulti
                                options={options}
                                name='genres'
                                id='genres'
                                className={styles.container__main__leftSide__customSelect} 
                                onChange={(selectedOptions) => {
                                    formik.setFieldValue(
                                      "genres",
                                      selectedOptions.map((option) => option.value)
                                    );
                                  }}
                                value={options.filter((option) => formik.values.genres.includes(option.value))}
                            />
                    </div>
                </aside>
                <aside className={styles.container__main__rightSide}>
                    <div>
                        <label htmlFor='release_date'>RELEASE DATE</label>
                        <input
                                type='date'
                                id='release_date'
                                name='release_date'
                                data-testid='release_date'
                                value={formik.values.release_date}
                                onChange={formik.handleChange}
                            />
                        {formik.errors.release_date ? <div style={{color: 'red'}}>{formik.errors.release_date}</div> : null}
                    </div>
                    <div>
                        <label htmlFor='vote_average'>RATING</label>
                        <input
                                type='number'
                                id='vote_average'
                                name='vote_average'
                                data-testid='vote_average'
                                value={formik.values.vote_average}
                                onChange={formik.handleChange}
                            />
                        {formik.errors.vote_average ? <div style={{color: 'red'}}>{formik.errors.vote_average}</div> : null}
                    </div>
                    <div>
                        <label htmlFor='runtime'>RUNTIME</label>
                        <input
                                type='number'
                                id='runtime'
                                name='runtime'
                                placeholder='runtime'
                                data-testid='runtime'
                                value={formik.values.runtime}
                                onChange={formik.handleChange}
                            />
                    </div>
                </aside>
            </div>
            <div className={styles.container__overview}>
                <label htmlFor='overview'>OVERVIEW</label>
                <textarea
                        id='overview'
                        placeholder='Movie Description'
                        name='overview'
                        data-testid='overview'
                        value={formik.values.overview}
                        onChange={formik.handleChange}
                    />
                {formik.errors.overview ? <div style={{color: 'red'}} data-testid='error'>{formik.errors.overview}</div> : null}
            </div>
            <div className={styles.container__buttons}>
                <Button btnClass='secondary' text='RESET' onClick={() => formik.resetForm()}/>
                <Button type='submit' btnClass='primary' text='SUBMIT' data-testid='form-submit'/>
            </div>
        </form>
    )
}