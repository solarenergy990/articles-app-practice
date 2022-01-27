import React from 'react';
import { Card, Button } from 'react-bootstrap';
import s from './ArticleCard.module.css';

const ArticleCard = () => {
  return (
    <div>
      <Card className={s.card}>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body className={s.content}>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary" className={s.button}>
            Show card
          </Button>
          <Button variant="primary" className={s.button}>
            Change color
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleCard;
