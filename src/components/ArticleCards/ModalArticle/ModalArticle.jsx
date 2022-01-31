import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import s from './ModalArticle.module.css';

const ModalArticle = ({ setActive, onOpenModal }) => {
  //   console.log(onOpenModal);

  const { title, body } = onOpenModal;

  return (
    <div className={s.container}>
      <Card>
        <Card.Header className={s.header} as="h5">
          Featured
          <div>
            <CloseButton onClick={() => setActive(false)} />
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
