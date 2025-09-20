// src/store/productsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrderModelStore = create(
  persist(
    (set) => ({
      showOrderModel: false, 
      setOrderModel: (model) => set({ showOrderModel: model }),
    }),
    {
      name: "order-model", 
    }
  )
);

export default useOrderModelStore;
