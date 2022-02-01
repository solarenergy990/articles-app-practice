import React from 'react';
import { Card, Button } from 'react-bootstrap';
import s from './CloseModal.module.css';

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
          <Card.Title className={s.title}>Delete article</Card.Title>
          <Card.Text className={s.text}>Are You sure?</Card.Text>
          <div className={s.wrapper}>
            <Button variant="danger" onClick={() => onDeleteCard()}>
              Yes
            </Button>
            <Button variant="primary" onClick={() => onCloseModal()}>
              No
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CloseModal;
