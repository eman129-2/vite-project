import * as zustand from 'zustand';
const { create } = zustand;

const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product, quantity) => {
    set((state) => {
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        return {
          cartItems: state.cartItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...product, quantity }],
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== productId),
    }));
  },

  updateQuantity: (productId, newQuantity) => {
    set((state) => ({
      cartItems: state.cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ),
    }));
  },

  getTotalItems: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCartStore;
