import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import s from './Home.module.css';

import Container from '../../components/Container/Container';
import ArticleCards from '../../components/ArticleCards/ArticleCards';

import ArticlesAPI from '../../services/articles-api';

const Home = () => {
  const [visibleButton, setVisibleButton] = useState(true);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    ArticlesAPI()
      .then(res => {
        // console.log(articles);
        if (!articles) {
          setArticles(res.slice(0, 3));
        }
        console.log(articles);
      })
      .catch(error => console.log('something went wrong', error));
  }, [articles]);

  useEffect(() => {
    if (!articles) {
      return;
    }
    if (articles.length >= 100) {
      setVisibleButton(false);
    }
  }, [articles]);

  const onShowMore = async () => {
    await ArticlesAPI().then(res => {
      const filteredArticles = res.filter(article => {
        const articleId = articles.map(article => article.id);

        return !articleId.includes(article.id);
      });

      setArticles(prevArticles => [
        ...prevArticles,
        ...filteredArticles.slice(0, 3),
      ]);
    });
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
        {articles && <ArticleCards articlesData={articles} />}
      </div>
      <div className={s.showMore}>
        {visibleButton && (
          <Button
            type="button"
            variant="primary"
            className={s.button}
            onClick={() => onShowMore()}
          >
            Show more
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Home;
