import React from 'react';
import s from './ArticleCards.module.css';
import ArticleCard from './ArticleCard/ArticleCard';

const ArticleCards = ({ articlesData, setId, setActive }) => {
  return (
    <div>
      <ul className={s.list}>
        {articlesData.map(article => {
          const { id, title, body } = article;
          return (
            <li className={s.item} key={id}>
              <ArticleCard
                cardTitle={title}
                cardText={body}
                setId={setId}
                currentId={id}
                setActive={setActive}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCards;
