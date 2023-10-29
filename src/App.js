import './scss/app.scss';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';

import axios from 'axios';
import Skeleton from './components/PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';

function App() {
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
    console.log('Mount');
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
