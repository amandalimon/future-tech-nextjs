import { create } from 'zustand'

type Store = {
    cart: CartItem[]
    addToCart: (cartItem: CartItem) => void
}

export const useShopingCart = create<Store>()((set) => ({
    cart: [],
    addToCart: (cartItem) => set((state) => ({ cart: [...state.cart, cartItem] })),
}))