import { create } from 'zustand'

type Store = {
    cart: CartItem[]
    addToCart: (cartItem: CartItem) => void
    removeCartItem: (cartItem: CartItem) => void
}

const saveArrayToLocalStorage = (array: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(array))
}

export const useShopingCart = create<Store>()((set) => ({
    cart: [],

    addToCart: (cartItem) => set(
        (state) => {
            const currentCart = state.cart
            const itemExists = currentCart.find((item) => item.id === cartItem.id)
            // avoid duplicated items
            const replaceExistingItem = currentCart.map((item) => {
                if (item.id === cartItem.id) {
                    return cartItem
                }
                return item
            })
            if (itemExists) {
                saveArrayToLocalStorage(replaceExistingItem)
                return ({ cart: replaceExistingItem })
            }
            saveArrayToLocalStorage([...state.cart, cartItem])
            return ({ cart: [...state.cart, cartItem] })
        }),

    removeCartItem: (cartItem) => set((state) => {
        const currentCart = state.cart
        const newCart = currentCart.filter((item) => item.id !== cartItem.id)
        saveArrayToLocalStorage(newCart)
        return ({ cart: newCart })
    })
}))