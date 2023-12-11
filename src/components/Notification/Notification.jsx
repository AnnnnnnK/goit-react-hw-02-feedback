import React from 'react';
import css from 'components/Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.txt}>{message}</p>;
};

export default Notification;
