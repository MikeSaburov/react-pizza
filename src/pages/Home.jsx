import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import axios from 'axios';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchItems() {
    setIsLoading(true);
    const response = await axios.get(
      'https://a4b2f70c0a223b33.mokky.dev/items'
    );
    setItems(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Category />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
    </div>
  );
};
