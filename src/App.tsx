import React from 'react';

import './scss/app.scss';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const Cart = React.lazy(
  () => import(/* webpackChunkName: 'Cart' */ './pages/Cart')
);
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: 'FullPizza' */ './pages/FullPizza')
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: 'NotFound' */ './pages/NotFound')
);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/react-pizza" element={<Home />} />
          <Route
            path="/cart"
            element={
              <React.Suspense fallback={<div>Идет загрузка Корзины...</div>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path="/pizza/:id"
            element={
              <React.Suspense
                fallback={<div>Идет загрузка информации о пицце...</div>}
              >
                <FullPizza />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense>
                <NotFound />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
