import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';

type Props = {
  children: React.ReactNode;
  close: () => void;
};

function Modal({ children, close }: Props) {
  const container = document.getElementById('app-modal') as HTMLDivElement;
  const element = (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label="Modal shadow"
        className={styles.modalShadow}
        onKeyDown={() => close()}
        onClick={() => close()}
      />
      <div className={styles.modalContent}>
        <button type="button" className={styles.closeButton} onClick={() => close()}>&#x2b;</button>
        { children }
      </div>
    </>
  );

  return ReactDOM.createPortal(element, container);
}

export default Modal;
