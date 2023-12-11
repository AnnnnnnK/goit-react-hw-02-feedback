import React from 'react';
import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <h3 className={css.title}>
      {title} {children}
    </h3>
  );
};

export default Section;
