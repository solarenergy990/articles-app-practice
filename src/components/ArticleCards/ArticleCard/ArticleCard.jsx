import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import s from './ArticleCard.module.css';

const initialColors = {
  white: '#FFFFFF',
  red: '#F56F54',
  green: '#6DE160',
  gray: '#C0C1C0',
  magenta: '#EE67DB',
};

const ArticleCard = ({ cardTitle, cardText, currentId, setId, setActive }) => {
  const [color, setColor] = useState(initialColors.white);

  const styles = { backgroundColor: `${color}` };

  const onHandleClick = () => {
    setId(currentId);
    setActive(true);
  };

  const onColorChange = () => {
    let keys = Object.keys(initialColors);
    let randomKey = Math.floor(Math.random() * keys.length);

    let randomColor = keys[randomKey];

    setColor(initialColors[randomColor]);
  };
  return (
    <Card className={s.card}>
      <Card.Header as="h5">Article</Card.Header>
      {/* inline style here changes color dynamically */}
      <Card.Body style={styles}>
        <Card.Title className={s.title}>{cardTitle}</Card.Title>
        <Card.Text className={s.content}>{cardText}</Card.Text>
        <Button
          variant="primary"
          className={s.button}
          onClick={() => onHandleClick()}
        >
          Show card
        </Button>
        <Button
          variant="primary"
          className={s.button}
          onClick={() => onColorChange()}
        >
          Change color
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
