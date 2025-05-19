import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Cart {
  _id: string;
  quantity: number;
  name: string;
  sale_price: number;
  regular_price: number;
  images: string[];
}

export interface CartProps {
  _id: string;
  quantity?: number;
  name: string;
  sale_price: number;
  regular_price: number;
  images: string[];
}

interface CartState {
  cartItems: Cart[];

  addToCart: (data: CartProps) => void;

  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;

  clearAllCart: () => void;
}

const useCartItems = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (data: CartProps) => {
        set((state) => {
          const isProductExistInCart = state.cartItems.find(
            (item) => item._id === data._id
          );

          if (isProductExistInCart) {
            return {
              ...state,
              cartItems: state.cartItems.map((item) => {
                if (item._id === data._id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                } else {
                  return item;
                }
              }),
            };
          } else {
            return {
              ...state,
              cartItems: [
                ...state.cartItems,
                {
                  name: data.name,
                  _id: data._id,
                  quantity: 1,
                  sale_price: data.sale_price,
                  regular_price: data.regular_price,
                  images: data.images,
                },
              ],
            };
          }
        });
      },

      increaseQuantity: (id: string) => {
        set((state) => {
          return {
            ...state,

            cartItems: state.cartItems.map((item) => {
              if (item._id === id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              } else {
                return item;
              }
            }),
          };
        });
      },

      decreaseQuantity: (id: string) => {
        set((state) => {
          return {
            ...state,

            cartItems: state.cartItems.map((item) => {
              if (item._id === id) {
                return {
                  ...item,
                  quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                };
              } else {
                return item;
              }
            }),
          };
        });
      },

      removeFromCart: (id: string) => {
        set((state) => {
          return {
            ...state,
            cartItems: state.cartItems?.filter((item) => item._id !== id),
          };
        });
      },

      clearAllCart: () => {
        set((state) => {
          return {
            ...state,
            cartItems: [],
          };
        });
      },
    }),
    {
      name: "cart-items",
      partialize: (state) => ({ cartItems: state.cartItems }),
    }
  )
);

export { useCartItems };
