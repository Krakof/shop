import React from 'react';
import '../../sass/SingleProduct.scss';

const SingleProduct = (props) => (
    <div className={'single-product'}>
        <div className={'image'}>
            <img src={props.product.image} alt=""/>
        </div>
        <div className={'meta'}>
            <h2>{props.product.name}</h2>
            <h4>${props.product.price}</h4>
            <p>{props.product.description}</p>

            <button className={'btn add-to-cart'} onClick={() => props.addToCart(props.product.id)}>Add to cart</button>
        </div>
    </div>
);

export default SingleProduct