import React, { useState } from 'react';
import { Form, Button, CloseButton } from 'react-bootstrap';

const ArticleForm = ({ setActive, onOpenModal, onSubmit, setForm }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onHandleClose = () => {
    setActive(false);
    setTimeout(() => setForm(false), 500);
  };

  const handleChange = evt => {
    const { value } = evt.target;

    if (evt.currentTarget.name === 'title') {
      setTitle(value);
    }
    if (evt.currentTarget.name === 'body') {
      setBody(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ title, body });

    reset();
  };

  const reset = () => {
    setTitle('');
    setBody('');
    onOpenModal(false);
    setActive(false);
    setForm(false);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <CloseButton onClick={() => onHandleClose()} />
          <Form.Label>Add title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Add title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Article</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="body"
            placeholder="Add article"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ArticleForm;
