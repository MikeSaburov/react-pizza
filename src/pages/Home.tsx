import React from 'react';
import { Category } from '../components/Category';
import { SortPopup } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import imgError from '../assets/img/error404.png';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { useAppDispatch } from '../redux/store';

export const Home: React.FC = () => {
  const { categoryId, sort, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const dispatch = useAppDispatch();

  const onClickCategories = (id: number) => {
    dispatch(setCategoryId(id));
  };

  //Функция запроса пицц с сервера
  const getPizzas = async () => {
    const sortBy = sort.sortProperty;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&name=*${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        category,
        search,
      })
    );

    window.scrollTo(0, 0);
  };

  //Запрос с backend
  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategories={onClickCategories} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Ошибка <span>🙁</span>
          </h2>
          <p>
            К сожалению, не удалось загрузить пиццы.
            <br />
            Попробуйте повотрить попытку позже.
          </p>
          <img width={450} height={450} src={imgError} alt="Ошибка" />
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeletons : pizzas}
        </div>
      )}
    </div>
  );
};
