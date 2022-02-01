import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import s from './ModalArticle.module.css';

const ModalArticle = ({ setActive, onOpenModal, setId, setArticle }) => {
  //   console.log(onOpenModal);

  const onHandleClose = () => {
    setActive(false);
    setId(null);
    setTimeout(() => setArticle(null), 500);
  };

  const { title, body } = onOpenModal;

  return (
    <div className={s.container}>
      <Card>
        <Card.Header className={s.header} as="h5">
          Article
          <div>
            <CloseButton onClick={() => onHandleClose()} />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ModalArticle;
