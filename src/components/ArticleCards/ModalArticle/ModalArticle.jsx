import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';

const ModalArticle = ({ setActive, onOpenModal }) => {
  //   console.log(onOpenModal);

  const { title, body } = onOpenModal;

  return (
    <div>
      <Card>
        <Card.Header as="h5">
          Featured <CloseButton onClick={setActive(false)} />
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
