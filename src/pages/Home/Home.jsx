import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import s from './Home.module.css';

import Container from '../../components/Container/Container';
import ArticleCards from '../../components/ArticleCards/ArticleCards';
import Modal from '../../components/Modal/Modal';
import ModalArticle from '../../components/ArticleCards/ModalArticle/ModalArticle';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import CloseModal from '../../components/CloseModal/CloseModal';

import shortid from 'shortid';

import ArticlesAPI from '../../services/articles-api';

const Home = () => {
  const [visibleButton, setVisibleButton] = useState(true);
  const [articles, setArticles] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [articleId, setArticleId] = useState(null);
  const [modalArticle, setModalArticle] = useState(null);
  const [bigCards, setBigCards] = useState(false);
  const [articleForm, setArticleForm] = useState(false);
  const [closedModal, setClosedModal] = useState(true);

  console.log(closedModal);

  useEffect(() => {
    ArticlesAPI()
      .then(res => {
        if (!articles) {
          setArticles(res.slice(0, 3));
        }
        // console.log(articles);
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
    if (!closedModal) {
      return;
    }
    if (articleId) {
      const foundArticle = articles.find(article => article.id === articleId);
      setModalArticle(foundArticle);
    }
  }, [articles, articleId, closedModal]);

  const onDeleteArticle = () => {
    // console.log(closedModal);
    // console.log(articleId);

    const filteredArticles = articles.filter(
      article => article.id !== articleId,
    );
    setArticles([...filteredArticles]);
  };

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

  const cardsSizeToggler = () => {
    if (!bigCards) {
      setBigCards(true);
    } else {
      setBigCards(false);
    }
  };

  const addArticle = data => {
    const { title, body } = data;

    const article = {
      id: shortid.generate(),
      title,
      body,
    };

    setArticles(prevArticles => {
      return [...prevArticles, article];
    });
  };

  const onOpenFormModal = () => {
    setArticleForm(true);
    setModalActive(true);
  };

  return (
    <Container>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        setId={setArticleId}
        setArticle={setModalArticle}
        setForm={setArticleForm}
        setClose={setClosedModal}
      >
        {modalArticle && (
          <ModalArticle
            setActive={setModalActive}
            onOpenModal={modalArticle}
            setId={setArticleId}
            setArticle={setModalArticle}
          />
        )}
        {articleForm && (
          <ArticleForm
            setActive={setModalActive}
            onOpenModal={setArticleForm}
            onSubmit={addArticle}
            setForm={setArticleForm}
          />
        )}
        {!closedModal && (
          <CloseModal
            setActive={setModalActive}
            setClose={setClosedModal}
            setArticle={setModalArticle}
            deleteArticle={onDeleteArticle}
            setId={setArticleId}
          />
        )}
      </Modal>

      <div className={s.heading}>
        <h2>Article List</h2>
        <div>
          {bigCards ? (
            <Button
              type="button"
              variant="outline-primary"
              className={s.button}
              onClick={() => cardsSizeToggler()}
            >
              Make small cards
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline-primary"
              className={s.button}
              onClick={() => cardsSizeToggler()}
            >
              Make big cards
            </Button>
          )}

          <Button
            type="button"
            variant="outline-primary"
            className={s.button}
            onClick={() => onOpenFormModal()}
          >
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
            setArticlesSize={bigCards}
            closeModal={setClosedModal}
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
