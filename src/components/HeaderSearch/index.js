import Button from "../Button";
import SearchForm from "../SearchForm";
import styles from './headersearch.module.scss';
import netflix from '../../assets/netflixroulette copy.png';
import Dialog from "../Dialog";
import React from "react";
import MovieForm from "../MovieForm";

export default function HeaderSearch({setQuery}) {
    const [isOpen , setIsOpen] = React.useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <figure>
                    <img src={netflix} alt='netflix'/>
                </figure>
                <Button text='+ ADD MOVIE' btnClass='addmovie' onClick={() => setIsOpen(true)}/>
            </div>
            <div className={styles.container__body}>
                <h1 className={styles.container__body__title}>FIND YOUR MOVIE</h1>
                <SearchForm initialSearchQuery='asdad' onSearch={data => setQuery(data)}/>
            </div>
            <Dialog title='add movie' isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <MovieForm />
            </Dialog>
        </div>
    )
}