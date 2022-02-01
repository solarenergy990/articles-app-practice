import React from 'react';
import s from './Modal.module.css';

const Modal = ({ active, setActive, children, setId, setArticle, setForm }) => {
  const onHandleClick = () => {
    setActive(false);
    setId(null);
    setTimeout(() => setForm(false), 500);
    setTimeout(() => setArticle(null), 500);
  };

  return (
    <div
      className={active ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => onHandleClick()}
    >
      <div
        className={active ? `${s.content} ${s.active}` : s.content}
        onClick={evt => evt.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
