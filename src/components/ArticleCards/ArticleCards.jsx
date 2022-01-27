import React from 'react';
import s from './ArticleCards.module.css';
import ArticleCard from './ArticleCard/ArticleCard';

const ArticleCards = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <ArticleCard />
        </li>
      </ul>
    </div>
  );
};

export default ArticleCards;
