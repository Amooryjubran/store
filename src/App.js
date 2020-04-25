import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Default from './pages/Default';
import SingleProductPage from './pages/SingleProductPage';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return (
    <>
    {/* navbar,sidebar,cart,footer */}
    <Navbar />
    <Sidebar />
    <SideCart />
      <Switch>
        <Route path="/" excat component={HomePage} />
        <Route path="/about"  component={AboutPage} />
        <Route path="/contact"  component={ContactPage} />
        <Route path="/products" excat component={ProductsPage} />
        <Route path="/products/:id"  component={SingleProductPage} />
        <Route path="/cart"  component={CartPage} />
        <Route component={Default} />

      </Switch>
    <Footer/>
    </>
    
  );
}



export default App;
