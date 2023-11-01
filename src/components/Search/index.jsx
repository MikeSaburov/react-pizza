import React from 'react';

import styles from './Search.module.scss';

export const Search = () => {
  return (
    <input className={styles.root} type="text" placeholder="Поиск пиццы..." />
  );
};
