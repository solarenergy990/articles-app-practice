import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import s from './Home.module.css';

import Container from '../../components/Container/Container';
import ArticleCards from '../../components/ArticleCards/ArticleCards';

import ArticlesAPI from '../../services/articles-api';

const Home = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [articles, setArticles] = useState(null);
  const [hiddenButton, setHiddenButton] = useState(false);

  useEffect(() => {
    ArticlesAPI()
      .then(res => {
        console.log(articles);
        if (!articles) {
          setArticles(res.slice(0, 3));
          console.log(articles);
        }
      })
      .catch(error => console.log('something went wrong', error));
  }, [articles]);

  const onShowMore = async () => {
    setActiveButton(true);
    await ArticlesAPI().then(res => {
      const filteredArticles = res.filter(article => {
        const articleId = articles.map(article => article.id);
        // console.log(articleId.includes(article.id));
        return !articleId.includes(article.id);
      });

      setArticles(prevArticles => [
        ...prevArticles,
        ...filteredArticles.slice(0, 3),
      ]);
    });

    setActiveButton(false);
  };

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
        <Button
          type="button"
          variant="primary"
          className={s.button}
          onClick={() => onShowMore()}
        >
          Show more
        </Button>
      </div>
    </Container>
  );
};

export default Home;
