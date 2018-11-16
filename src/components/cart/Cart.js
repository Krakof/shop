import React, {Component} from 'react';
import '../../sass/Cart.scss'

class Cart extends Component {
    constructor() {
        super();

        this.orderTotal = 0;
    }
    productList() {
        const products = Object.keys(this.props.cart).map(key => {
            const product = this.props.cart[key];
            const total = product.price * product.quantity
            this.orderTotal += total;
            return (
                <tr key={product.id} className={'list__row'}>
                    <td className={'image'}><img src={product.image} alt={product.name} /></td>
                    <td className={'name'}>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${total.toFixed(2)}</td>
                </tr>
            )
        });

        return (
            <table className={'list'}>
                <thead className={'headings'}>
                <tr>
                    <th className={'image'}></th>
                    <th className={'name'}>Product</th>
                    <th className={'price'}>Price</th>
                    <th className={'quantity'}>Quantity</th>
                    <th className={'total'}>Total</th>
                </tr>
                </thead>
                <tbody>
                {products}
                </tbody>
            </table>
        )
    }
    render() {
        const productList = this.productList();

        return (
            <div className={'cart__main'}>
                <h2>Shopping Cart</h2>
                {productList}
                <div className={'order-total'}><span>Order total:</span> ${this.orderTotal.toFixed(2)}</div>
                <button className={'btn'}
                        onClick={() => this.props.handleCheckout(this.props.nextStep)}
                >Proceed</button>
            </div>
        )
    }
}

export default Cart;