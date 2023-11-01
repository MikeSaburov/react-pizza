import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import axios from 'axios';
import { useEffect, useState } from 'react';

export const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'name',
  });

  const pizzas = items
    .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <PizzaBlock {...obj} key={obj.id} />);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const response = await axios.get(
        `https://a4b2f70c0a223b33.mokky.dev/items?${category}&sortBy=${sortType.sortProperty}`
      );
      setItems(response.data);
      setIsLoading(false);
    };
    fetchData();
    window.scrollTo(0, 0); //Сброс скролла
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Category
          value={categoryId}
          onClickCategories={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};
