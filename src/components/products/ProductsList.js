import React from 'react';
import modalWindow from '../modal/ModalWindow';
import SingleProduct from './SingleProduct';
import '../../sass/ProductList.scss'

const SingleProductModal = modalWindow()(SingleProduct);

const ProductsList = props => (
    <div className={'product'}>
        <div className={'product__filter'}>
            <label>Filter by name:</label>
            <input type="text" id="filter"
                  value={props.filter}
                  onChange={(e) => props.onFilterChange(e.target.value)}
            />
        </div>
        <ul className={'product__list'}>
            {props.products.map(prod => (
                <li key={prod.id} className={'product__card'} onClick={() => {props.onClick(prod)}}>
                    <img className={'card__img'} src={prod.image} alt={prod.name} />
                    <div className={'card__name'}>{prod.name}</div>
                    <div className={'card__price'}>${prod.price}</div>
                </li>
            ))}
        </ul>
        <SingleProductModal
            product={props.currentProduct}
            onClose={props.onClick}
            show={props.show}
            addToCart={props.addToCart}
        />
    </div>

);

export default ProductsList;
