//import packages
import { AiFillCloseCircle } from 'react-icons/ai'
import React from 'react'

//import styling
import styles from './options.module.scss'
import Dialog from '../Dialog'
import MovieForm from '../MovieForm'

import constants from '../../utils/constants'
import DeleteBlock from '../DeleteBlock'

export default function Options({toggleOptionsWithPropagation}) {
    const [isOpen , setIsOpen] = React.useState(false);
    const [isOpenDelete , setIsOpenDelete] = React.useState(false);

    function EditHandleClick(e) {
        e.stopPropagation();
        setIsOpen(true)
    }

    function DeleteHandleClick(e) {
        e.stopPropagation();
        setIsOpenDelete(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__icon}>
                <AiFillCloseCircle onClick={(e) => toggleOptionsWithPropagation(e)}/>
            </div>
            <div className={styles.container__buttons} onClick={(e) => toggleOptionsWithPropagation(e)}>
                <button onClick={(e) => EditHandleClick(e)}>Edit</button>
                <button onClick={(e) => DeleteHandleClick(e)}>Delete</button>
            </div>
            {console.log(isOpen)}
            <Dialog title='edit movie' isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <MovieForm movieInfo={constants.MovieDetailINFO} callback={data=> console.log(data)} onClose={() => setIsOpen(false)}/>
            </Dialog>
            <Dialog title='delete movie' isOpen={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
                <DeleteBlock />
            </Dialog>
        </div>
    )
}