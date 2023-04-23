import Button from "../Button";
import styles from './deleteblock.module.scss';

export default function DeleteBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.container__delete}>
                <h4>are you sure you want to delete this movie ?</h4>
                <Button btnClass='primary' text='SUBMIT'/>
            </div>
        </div>
    )
}