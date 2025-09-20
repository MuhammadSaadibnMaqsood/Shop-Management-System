// src/store/cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

     
      addToCart: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),

     
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((i) => i._id !== id),
        })),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "Cart-Storage", // localStorage key
    }
  )
);

export default useCartStore;
