import React from 'react';
import styles from './NotFoundBlock.module.scss';
import notFound from '../../assets/img/404.png';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🙁</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутсвует в нашем интернет магазине
      </p>
      <br />
      <img src={notFound} alt="" />
    </div>
  );
};
