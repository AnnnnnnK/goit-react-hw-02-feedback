import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ feedback: { good, neutral, bad }, total, positive }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          Good: <span className={css.span}>{good}</span>
        </li>
        <li className={css.item}>
          Neutral: <span className={css.span}>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad: <span className={css.span}>{bad}</span>
        </li>
        <li className={css.item}>
          Total: <span className={css.span}>{total}</span>
        </li>
        <li className={css.item}>
          Positive feedback: <span className={css.span}>{positive}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
