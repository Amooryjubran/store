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


function App() {
  return (
    <>
    <HomePage/>
    <AboutPage />
    <ProductsPage/>
    <ContactPage />
    <CartPage />
    <Default/>
    <SingleProductPage />
    <h1>hello from store </h1>
    </>
    
  );
}



export default App;
