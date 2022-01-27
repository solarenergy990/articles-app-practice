import React from 'react';
import { Button } from 'react-bootstrap';
import s from './Home.module.css';

import Container from '../../components/Container/Container';
import ArticleCards from '../../components/ArticleCards/ArticleCards';

const Home = () => {
  return (
    <Container>
      <div className={s.heading}>
        <h2>Article List</h2>
        <div>
          <Button type="button" variant="outline-primary" className={s.button}>
            Make big cards
          </Button>

          <Button type="button" variant="outline-primary" className={s.button}>
            Add article
          </Button>
        </div>
      </div>
      <div className={s.articles}>
        <ArticleCards />
      </div>
      <div className={s.showMore}>
        <Button type="button" variant="primary" className={s.button}>
          Show more
        </Button>
      </div>
    </Container>
  );
};

export default Home;
