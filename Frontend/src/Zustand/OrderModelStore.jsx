// src/store/productsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrderModelStore = create(
  persist(
    (set) => ({
      showOrderModel: false, // default: modal is closed
      setOrderModel: (model) => set({ showOrderModel: model }),
    }),
    {
      name: "order-model", // localStorage key
    }
  )
);

export default useOrderModelStore;
