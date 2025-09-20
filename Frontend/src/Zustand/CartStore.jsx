import { create } from "zustand";


const cartStore = create((set) => ({
    cartItem: [],
    setCartItem: (item) => set({ cartItem: item }),
}))

export default cartStore;