// import styling
import styles from './button.module.scss';

export default function Button({btnClass, text , ...props}) {
    return (
        <div className={styles.button}>
            <button className={btnClass === 'primary' ? styles.button__primary : styles.button__secondary} {...props}>{text}</button>
        </div>
    )
}