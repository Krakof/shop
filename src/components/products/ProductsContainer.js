import React, { Component } from 'react';
import ProductsList from './ProductsList';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSingleProduct: false,
            currentProduct: {},
            filteredProducts: [],
            productFilter: ''
        };

        this.viewProduct = this.viewProduct.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
    }

    componentWillMount() {
        this.setState({
            filteredProducts: this.props.products
        })
    }

    viewProduct(product = {}) {
        this.setState({
            currentProduct: product,
            showSingleProduct: !this.state.showSingleProduct
        })
    }

    filterProducts(prodName) {
        const filteredProducts = this.props.products.filter(item => {
            return item.name.toLowerCase().indexOf(prodName.toLowerCase()) !== -1;
        })

        this.setState({
            filteredProducts,
            productFilter: prodName
        })
    }

    render() {
        const {showSingleProduct, currentProduct} = this.state;

        return (
            <ProductsList
                {...this.props}
                products={this.state.filteredProducts}
                filter={this.state.productFilter}
                onFilterChange={this.filterProducts}
                onClick={this.viewProduct}
                show={showSingleProduct}
                currentProduct={currentProduct}
            />
        )
    }
}

export default ProductsContainer;