import logoSvg from '../assets/img/pizza-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { Search } from './Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';

export const Header = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  const { pathname } = useLocation();

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        {pathname !== '/cart' && <Search />}
        <Link to="/cart">
          {pathname !== '/cart' && (
            <div className="header__cart">
              <div className="button button--cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 6.33333 16.3333 C 7.06971 16.3333 7.66667 15.7364 7.66667 15 C 7.66667 14.2636 7.06971 13.6667 6.33333 13.6667 C 5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333 Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 14.3333 16.3333 C 15.0697 16.3333 15.6667 15.7364 15.6667 15 C 15.6667 14.2636 15.0697 13.6667 14.3333 13.6667 C 13.597 13.6667 13 14.2636 13 15 C 13 15.7364 13.597 16.3333 14.3333 16.3333 Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 4.78002 4.99999 H 16.3334 L 15.2134 10.5933 C 15.1524 10.9003 14.9854 11.176 14.7417 11.3722 C 14.4979 11.5684 14.1929 11.6727 13.88 11.6667 H 6.83335 C 6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067 L 4.48669 2.82666 C 4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666 H 1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{totalCount}</span>
              </div>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
