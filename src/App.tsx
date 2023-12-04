import React from 'react';

import './scss/app.scss';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
//import { Cart } from './pages/Cart';
import FullPizza from './pages/FullPizza';

const Cart = React.lazy(() => import('./pages/Cart'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <React.Suspense>
                <Cart />
              </React.Suspense>
            }
          />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
