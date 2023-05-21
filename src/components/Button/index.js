// import styling
import styles from './button.module.scss';
import React from 'react';

export default function Button({btnClass, text , ...props}) {
    return (
        <div className={styles.button}>
            <button type='submit' className={btnClass === 'primary' ? styles.button__primary : (btnClass === 'addmovie' ? styles.button__addmovie : styles.button__secondary)} {...props}>{text}</button>
        </div>
    )
}