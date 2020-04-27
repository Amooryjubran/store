import React, { Component } from "react";
import {linkData} from './linkData';
import {socialDate} from './socialDate';
import {items} from './productData';


const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state ={
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 21,
    links: linkData,
    socialIcons: socialDate,
    cart: [],
    cartItems: 0,
    cartSubTotal :0,
    cartTax: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProducts: {},
    loading: true
  };
  // handle side bar
  handleSidebar = () => {
    this.setState({sidebarOpen:!this.state.sidebarOpen})
  }
  // handle cart 
  handleCart = () => {
    this.setState({cartOpen:!this.state.sidebarOpen})
  }
  // close cart 
  closeCart = () => {
    this.setState({cartOpen: false})
  }
  // open 
  openCart = () => {
    this.setState({cartOpen: true})
  }

  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        closeCart: this.closeCart,
        openCart: this.openCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
