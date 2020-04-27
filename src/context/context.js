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
    loading: false
  };

  componentDidMount() {
    // from contenful items
    this.setProducts(items);
  }

  // set products
  setProducts = (products) => {
    let storeProducts = products.map(item => {
      const {id} = item.sys;
      const product = {id, ...item.fields};
      return product
    })
    // featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts:storeProducts,
      featuredProducts,
      cart: this.getStoreCart(),
      singleProducts:this.getStorageProduct(),
      loading: false
    });
    
  };

  // add to cart
  addToCart = (id) => {
    console.log(`add to cart ${id}`);
    
  }
  // set single product
  setSingleProduct = (id) => {
    console.log(`set single products ${id}`);
    
  }

    // get cart from local storage
  getStoreCart = () => {
    return [];
  }
// get product from local storage
  getStorageProduct = () => {
    return {};
  };

  // get totals
  getTotals = () => {};

    // add totals 
    getTotals = () => {};

    // sync storage
    syncStorage = () => {

    }
    


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
        openCart: this.openCart,
        addToCart: this.addToCart,
        setSingleProduct: this.setSingleProduct
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
