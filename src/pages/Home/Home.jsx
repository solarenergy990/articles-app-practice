import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import s from './Home.module.css';

import Container from '../../components/Container/Container';
import ArticleCards from '../../components/ArticleCards/ArticleCards';
import Modal from '../../components/Modal/Modal';
import ModalArticle from '../../components/ArticleCards/ModalArticle/ModalArticle';

import ArticlesAPI from '../../services/articles-api';

const Home = () => {
  const [visibleButton, setVisibleButton] = useState(true);
  const [articles, setArticles] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [articleId, setArticleId] = useState(null);
  const [modalArticle, setModalArticle] = useState(null);

  console.log(articleId);
  console.log(modalArticle);
  console.log(modalActive);

  useEffect(() => {
    ArticlesAPI()
      .then(res => {
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

  useEffect(() => {
    if (articles && articleId) {
      const foundArticle = articles.find(article => article.id === articleId);
      setModalArticle(foundArticle);
      // console.log(foundArticle);
    }
  }, [articles, articleId]);

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
      {modalArticle && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalArticle setActive={setModalActive} onOpenModal={modalArticle} />
        </Modal>
      )}

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
        {articles && (
          <ArticleCards
            articlesData={articles}
            setId={setArticleId}
            setActive={setModalActive}
          />
        )}
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
