import { useState } from 'react';

export const PizzaBlock = ({ name, price, imageUrl, sizes, types }) => {
  const typeName = ['тонкое', 'традиционное'];

  //Состояние размеров пицц
  const [sizePizza, setSizePizza] = useState(0);

  //Состояние выбора теста для пиццы
  const [doughPizza, setDoughPizza] = useState(0);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              className={
                doughPizza === typeId || types.length === 1 ? 'active' : ''
              }
              onClick={() => setDoughPizza(typeId)}
            >
              {typeName[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              className={sizePizza === index ? 'active' : ''}
              onClick={() => setSizePizza(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10.8 4.8 H 7.2 V 1.2 C 7.2 0.5373 6.6627 0 6 0 C 5.3373 0 4.8 0.5373 4.8 1.2 V 4.8 H 1.2 C 0.5373 4.8 0 5.3373 0 6 C 0 6.6627 0.5373 7.2 1.2 7.2 H 4.8 V 10.8 C 4.8 11.4627 5.3373 12 6 12 C 6.6627 12 7.2 11.4627 7.2 10.8 V 7.2 H 10.8 C 11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
};
