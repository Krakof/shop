import React from 'react';
import cartIcon from '../../shopping-cart.png'
import '../../sass/Cart.scss'



const CartHeader = props => {
    let qty = 0;

    let total = Object.keys(props.cart)
        .reduce((sum, id) => {
                    qty += props.cart[id].quantity;
                    return sum + props.cart[id].price * props.cart[id].quantity;
                }, 0)
        .toFixed(2);

    return (
        <div className={'cart__header'}
             onClick={props.showCart}
        >
            <img className={'icon'} src={cartIcon} alt="Cart"/>
            <span className={'total'}>${total}</span>
            <span>/{qty} items</span>
        </div>
    )

};

export default CartHeader;