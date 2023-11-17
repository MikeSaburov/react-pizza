import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

export const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);

  const { categoryId, sort } = useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.pizza);

  const dispatch = useDispatch();

  const onClickCategories = (id) => {
    dispatch(setCategoryId(id));
  };

  //Функция запроса пицц с сервера
  const getPizzas = async () => {
    setIsLoading(true);
    const sortBy = sort.sortProperty;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&name=*${searchValue}` : '';
    try {
      // const { data } = await axios.get(
      //   `https://a4b2f70c0a223b33.mokky.dev/items?${category}&sortBy=${sortBy}${search}`
      // );
      dispatch(
        fetchPizzas({
          sortBy,
          category,
          search,
        })
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
  };

  //Запрос с backend
  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock {...obj} key={obj.id} />);
  // .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase())) Реализация поиска локально

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategories={onClickCategories} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};
