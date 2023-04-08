import React from "react";
import ReactDOM from "react-dom";
import styles from './dialog.module.scss';
import FocusTrap from "focus-trap-react";
import { AiFillCloseCircle } from 'react-icons/ai'

const Dialog = ({title, isOpen, children , onClose}) => {

  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <FocusTrap>
        <div className={styles.container}>
            <div className={styles.container__dialog}>
              <h2>{title}</h2>
              <div className={styles.container__dialog__close} onClick={onClose}>
                <AiFillCloseCircle color='white' size={30}/>
              </div>
              {children}
            </div>
        </div>
    </FocusTrap>,
    document.getElementById('modal')
  );
};

export default Dialog;