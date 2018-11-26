const cartStorageName = 'cart';

export const saveCartToStorage = (cart) => {
    localStorage.setItem(cartStorageName, JSON.stringify(cart));
};

export const getCartFromStorage = () => {
    return JSON.parse(localStorage.getItem(cartStorageName));
};

export const cleanStorageCart = () => {
    localStorage.removeItem(cartStorageName);
}