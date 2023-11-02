import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

import React from 'react';

export const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel="Вперед"
      previousLabel="Назад"
      onPageChange={(event) => console.log(event)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};
