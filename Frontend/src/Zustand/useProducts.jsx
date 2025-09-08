// src/store/productsStore.js
import { create } from "zustand";

const useProductsStore = create((set) => ({
  productsZustand: [],
  setProducts: (products) => set({ products }),
}));

export default useProductsStore;
