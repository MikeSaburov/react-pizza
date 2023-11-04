import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [categoryId, setCategoryId] = useState(0); //***
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'name',
  });

  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onClickCategories = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&name=*${searchValue}` : '';
      const response = await axios.get(
        `https://a4b2f70c0a223b33.mokky.dev/items?&${category}&sortBy=${sortType.sortProperty}${search}`
      );
      setItems(response.data);
      setIsLoading(false);
    };
    fetchData();
    window.scrollTo(0, 0); //Сброс скролла
  }, [categoryId, sortType, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock {...obj} key={obj.id} />);

  // .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase())) Реализация поиска локально

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategories={onClickCategories} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination />
    </div>
  );
};
