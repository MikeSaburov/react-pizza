export const PizzaBlock = ({ title, price, imgUrl }) => {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imgUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
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
