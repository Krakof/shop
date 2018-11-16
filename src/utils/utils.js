const cartStorageName = 'cart';

export const saveCartToStorage = (cart) => {

    const arr = Object.keys(cart).map(prodId => {
        return {
            id: prodId,
            qty: cart[prodId].quantity
        }
    });

    localStorage.setItem(cartStorageName, JSON.stringify(arr));
};

export const getCartFromStorage = () => {
    return JSON.parse(localStorage.getItem(cartStorageName));
};

export const cleanStorageCart = () => {
    localStorage.removeItem(cartStorageName);
}