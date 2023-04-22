// import components
import Button from "../Button";
import SearchForm from "../SearchForm";
import Dialog from "../Dialog";
import MovieForm from "../MovieForm";

//import styling
import styles from './headersearch.module.scss';

//import assets
import netflix from '../../assets/netflixroulette copy.png';

//import packages
import React from "react";

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
                <SearchForm initialSearchQuery="test" onSearch={data => setQuery(data)}/>
            </div>
            <Dialog title='add movie' isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <MovieForm callback={data=> console.log(data)} onClose={() => setIsOpen(false)}/>
            </Dialog>
        </div>
    )
}