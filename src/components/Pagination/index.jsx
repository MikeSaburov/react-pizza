import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

import React from 'react';

export const Pagination = ({ totalPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel="Вперед"
      previousLabel="Назад"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={totalPage}
      renderOnZeroPageCount={null}
    />
  );
};
