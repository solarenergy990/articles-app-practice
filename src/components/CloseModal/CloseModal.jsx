import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CloseModal = ({ setActive, setClose, deleteArticle, setId }) => {
  const onDeleteCard = () => {
    setActive(false);
    setTimeout(() => setClose(true), 500);
    deleteArticle();
    setId(null);
  };

  const onCloseModal = () => {
    setActive(false);
    setTimeout(() => setClose(true), 500);
    setId(null);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="danger" onClick={() => onDeleteCard()}>
            Yes
          </Button>
          <Button variant="primary" onClick={() => onCloseModal()}>
            No
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CloseModal;
