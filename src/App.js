import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import ContactPage from './components/pages/ContactPage';
import CartPage from './components/pages/CartPage';
import Default from './components/pages/Default';
import SingleProductPage from './components/pages/SingleProductPage';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
    {/* navbar,sidebar,cart,footer */}
      <Switch>
        <Route path="/" excat component={HomePage} />
        <Route path="/about"  component={AboutPage} />
        <Route path="/contact"  component={ContactPage} />
        <Route path="/products" excat component={ProductsPage} />
        <Route path="/products/:id"  component={SingleProductPage} />
        <Route path="/cart"  component={CartPage} />
        <Route component={Default} />

      </Switch>
    </>
    
  );
}



export default App;
