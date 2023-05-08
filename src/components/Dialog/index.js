import React from "react";
import ReactDOM from "react-dom";
import styles from './dialog.module.scss';
import FocusTrap from "focus-trap-react";
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Dialog = ({title, isOpen, children , onClose}) => {

  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <FocusTrap>
        <div className={styles.container}>
            <div className={styles.container__dialog}>
              <h2>{title}</h2>
              <div data-testid='closeModal' className={styles.container__dialog__close} onClick={onClose}>
                <Link to='/'><AiFillCloseCircle color='white' size={30}/></Link>
              </div>
              {children}
            </div>
        </div>
    </FocusTrap>,
    document.getElementById('modal')
  );
};

export default Dialog;