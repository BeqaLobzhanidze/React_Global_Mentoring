//import packages
import { AiFillCloseCircle } from 'react-icons/ai'

//import styling
import styles from './options.module.scss'

export default function Options({toggleOptionsWithPropagation}) {
    return (
        <div className={styles.container}>
            <div className={styles.container__icon}>
                <AiFillCloseCircle onClick={(e) => toggleOptionsWithPropagation(e)}/>
            </div>
            <div className={styles.container__buttons} onClick={(e) => toggleOptionsWithPropagation(e)}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}