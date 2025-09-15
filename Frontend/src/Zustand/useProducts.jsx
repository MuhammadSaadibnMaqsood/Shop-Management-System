// src/store/productsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductsStore = create(
  persist(
    (set) => ({
      productsZustand: [],
      setProducts: (products) => set({ productsZustand: products }),
    }),
    {
      name: "Product-Storage",
    }
  )
);

export default useProductsStore;
