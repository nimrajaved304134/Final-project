import { create } from 'zustand';
import  client   from '../sanity/lib/client'; // Import your sanity client
import { product, productdetail } from '../../types/products'; // Adjust import based on where you defined your types

// Sanity client setup (adjust based on your project configuration)

interface CartItem extends product {
  amount: number;
}

interface CartStore {
  cart: CartItem[];
  products: product[];
  productDetails: productdetail | null;
  fetchProducts: () => void;
  fetchProductDetail: (slug: string) => void;
  addToCart: (item: product, amount: number) => void;
  deleteFromCart: (item: product) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  cart: [],
  products: [],
  productDetails: null, // New state to store product details
  fetchProducts: async () => {
    try {
      const data: product[] = await client.fetch('*[_type == "product"]'); // Query to fetch products from Sanity
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  fetchProductDetail: async (slug: string) => {
    try {
      const data: productdetail = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]`,
        { slug }
      );
      set({ productDetails: data });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  },
  addToCart: (item, amount) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === item._id // Using _id to identify items
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].amount += amount; // Adding the amount
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...item, amount }] };
      }
    });
  },
  deleteFromCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === item._id // Using _id to identify items
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingItemIndex].amount > 1) {
          updatedCart[existingItemIndex].amount -= 1;
        } else {
          updatedCart.splice(existingItemIndex, 1);
        }
        return { cart: updatedCart };
      }
      return { cart: state.cart };
    });
  },
  clearCart: () => set({ cart: [] }),
}));
