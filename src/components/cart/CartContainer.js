const CartFactory = () => {
    let cart = {};

    return {
        initCart(productList, cachedProducts) {

            productList.forEach(prod => {

                if (cachedProducts[prod.id]) {
                    const { quantity } = cachedProducts[prod.id];

                    cart[prod.id] = {
                        ...prod,
                        quantity
                    }
                }
            });
        },

        addToCart(product) {
            const { id } = product;

            if (cart[id]) {

                cart[id].quantity += 1;


            } else {
                cart[id] = product;
                cart[id]['quantity'] = 1;
            }
        },

        getCart() {
            return cart
        },

        cacheCart() {
            let storage = {};

            Object.keys(cart).forEach(prodId => {
                let { quantity } = cart[prodId];
                storage[prodId] = {
                    quantity
                }
            });

            return storage
        },

        cleanCart() {
            cart = {};
        }
    }
};

export default CartFactory();