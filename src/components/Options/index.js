//import packages
import { AiFillCloseCircle } from 'react-icons/ai'
import React from 'react'

//import styling
import styles from './options.module.scss'

export default function Options({toggleOptionsWithPropagation , id}) {
    const [isOpenDelete , setIsOpenDelete] = React.useState(false);

    function EditHandleClick(e) {
        e.stopPropagation();
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
                {/* <Link to={`${id}/edit`}> */}
                    <button onClick={(e) => EditHandleClick(e)}>Edit</button>
                {/* </Link> */}
                <button onClick={(e) => DeleteHandleClick(e)}>Delete</button>
            </div>
        </div>
    )
}