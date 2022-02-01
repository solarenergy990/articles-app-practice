import React from 'react';
import s from './ArticleCards.module.css';
import ArticleCard from './ArticleCard/ArticleCard';

const ArticleCards = ({
  articlesData,
  setId,
  setActive,
  setArticlesSize,
  closeModal,
}) => {
  const bigCards = { maxWidth: '520px' };
  const smallCards = { maxWidth: '320px' };

  return (
    <div>
      <ul className={s.list}>
        {articlesData.map(article => {
          const { id, title, body } = article;
          return (
            <li style={setArticlesSize ? bigCards : smallCards} key={id}>
              <ArticleCard
                cardTitle={title}
                cardText={body}
                setId={setId}
                currentId={id}
                setActive={setActive}
                closeModal={closeModal}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCards;
