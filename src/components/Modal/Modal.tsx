import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './Modal.module.scss';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  container?: HTMLElement;
}

export const Modal = ({ open, onClose, children, container }: ModalProps) => {
  if (!open) return null;

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const target = container || document.body;

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={clsx(styles.modal)} onClick={handleModalClick}>
        {children}
      </div>
    </div>,
    target,
  );
};
