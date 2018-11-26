import React, { Component } from 'react';
import products from '../products';
import { saveCartToStorage, getCartFromStorage, cleanStorageCart } from '../utils/utils'
import '../sass/App.scss';
import ProductsContainer from "./products/ProductsContainer.js";
import Cart from './cart/CartContainer';
import HeaderCart from "./cart/HeaderCart";
import modalWindow from './modal/ModalWindow';
import Checkout from "./checkout/Checkout";

class App extends Component {
    constructor() {
        super();

        this.state = {
            showCart: false,
            checkoutStep: ''
        };

        this.addToCart = this.addToCart.bind(this);
        this.toggleCartModal = this.toggleCartModal.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
        this.handleCheckoutStep = this.handleCheckoutStep.bind(this);
    }
    componentDidMount() {
        const cachedProducts = getCartFromStorage();

        if (products.length && cachedProducts) {

            Cart.initCart(products, cachedProducts);
            this.forceUpdate();
        }
    }

    addToCart(prodId) {

        const [productToAdd] = products.filter(item => item.id === prodId);

        Cart.addToCart(productToAdd);
        saveCartToStorage(Cart.cacheCart());

        this.forceUpdate()
    }

    cleanCart() {
        Cart.cleanCart();
        cleanStorageCart();
        this.forceUpdate();
    }

    toggleCartModal() {
        if (Object.keys(Cart.getCart()).length || this.state.showCart) {
            this.setState({
                showCart: !this.state.showCart,
                checkoutStep: ''
            })
        }
    }

    handleCheckoutStep(step = '') {
        this.setState({checkoutStep: step})
    }

    confirmOrder() {
        this.cleanCart();
        this.handleCheckoutStep('confirmation')
    }

  render() {
    const CheckoutModal = modalWindow()(Checkout);
    const cart = Cart.getCart();

    return (
      <div className="App">
        <header className="header">
          <h1>Shop</h1>
            <HeaderCart
                cart={cart}
                showCart={this.toggleCartModal}
            />
        </header>
        <ProductsContainer
            products={products}
            addToCart={this.addToCart}
        />
          <CheckoutModal
              show={this.state.showCart}
              cart={cart}
              onClose={this.toggleCartModal}
              handleCheckout={this.handleCheckoutStep}
              checkoutStep={this.state.checkoutStep}
              confirmOrder={this.confirmOrder}
          />
      </div>
    );
  }
}

export default App;
