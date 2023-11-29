import React from 'react';

type CategoryProps = {
  value: number;
  onClickCategories: any;
};

export const Category: React.FC<CategoryProps> = ({
  value,
  onClickCategories,
}) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategories(index)}
            className={value === index ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
