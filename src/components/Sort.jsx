import { useState } from 'react';

export const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const popupTitle = ['популярности', 'цене', 'алфавиту'];
  const selectedSortName = popupTitle[selectedSort];

  const handleSortItem = (i) => {
    setSelectedSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 5 C 10 5.16927 9.93815 5.31576 9.81445 5.43945 C 9.69075 5.56315 9.54427 5.625 9.375 5.625 H 0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945 C 0.061849 5.31576 0 5.16927 0 5 C 0 4.83073 0.061849 4.68424 0.185547 4.56055 L 4.56055 0.185547 C 4.68424 0.061849 4.83073 0 5 0 C 5.16927 0 5.31576 0.061849 5.43945 0.185547 L 9.81445 4.56055 C 9.93815 4.68424 10 4.83073 10 5 Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{selectedSortName}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {popupTitle.map((item, i) => (
              <li
                key={i}
                className={selectedSort === i ? 'active' : ''}
                onClick={() => handleSortItem(i)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
