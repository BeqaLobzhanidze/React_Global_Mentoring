// import components
import Button from "../Button";
import SearchForm from "../SearchForm";

//import styling
import styles from './headersearch.module.scss';

//import assets
import netflix from '../../assets/netflixroulette copy.png';

//import packages
import React from "react";
import Image from "next/image";
// import { Link, Outlet } from "react-router-dom";

export default function HeaderSearch() {
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <figure>
                    <Image src={netflix} alt='netflix'/>
                </figure>
                {/* <Link to='/new'> */}
                    <Button text='+ ADD MOVIE' btnClass='addmovie'/>
                {/* </Link> */}
            </div>
            <div className={styles.container__body}>
                <h1 className={styles.container__body__title}>FIND YOUR MOVIE</h1>
                <SearchForm initialSearchQuery="test" />
            </div>
            {/* <Outlet /> */}
        </div>
    )
}