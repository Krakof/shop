import React, { Component } from 'react';
import products from '../products';
import { saveCartToStorage, getCartFromStorage, cleanStorageCart } from '../utils/utils'
import '../sass/App.scss';
import ProductsContainer from "./products/ProductsContainer.js";
import HeaderCart from "./cart/HeaderCart";
import modalWindow from './modal/ModalWindow';
import Checkout from "./checkout/Checkout";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cart: {},
            showCart: false,
            checkoutStep: ''
        };

        this.addToCart = this.addToCart.bind(this);
        this.toggleCartModal = this.toggleCartModal.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
        this.handleCheckoutStep = this.handleCheckoutStep.bind(this);
    }
    componentDidMount() {
        let cart = {};
        const cachedProducts = getCartFromStorage();

        if (products.length && cachedProducts) {

            cachedProducts.forEach( cached => {
                let [matchedProduct] = products.filter(product => product.id === cached.id);

                matchedProduct['quantity'] = cached.qty;
                cart[cached.id] = matchedProduct;
            });

            this.setState({cart});
        }
    }

    addToCart(prodId) {

        let productToAdd = {...this.state.cart[prodId]};

        if (Object.keys(productToAdd).length) {
            productToAdd.quantity += 1;

        } else {

            [productToAdd] = products.filter(item => item.id === prodId);
            productToAdd['quantity'] = 1;
        }

        this.setState(state => {
            const cart = {...state.cart, ...{[prodId]: productToAdd}};

            saveCartToStorage(cart);

            return {
                cart
            }
        })
    }

    cleanCart() {
        cleanStorageCart();
        this.setState({cart: {}});
    }

    toggleCartModal() {
        if (Object.keys(this.state.cart).length || this.state.showCart) {
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

    return (
      <div className="App">
        <header className="header">
          <h1>Shop</h1>
            <HeaderCart
                cart={this.state.cart}
                showCart={this.toggleCartModal}
            />
        </header>
        <ProductsContainer
            products={products}
            addToCart={this.addToCart}
        />
          <CheckoutModal
              show={this.state.showCart}
              cart={this.state.cart}
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
