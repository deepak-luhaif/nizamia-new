import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IWishlist {
  _id: string;
  name: string;
  sale_price: number;
  regular_price: number;
  images: string[];
  slug: string;
}

interface WishlistState {
  wishlistItems: IWishlist[];

  addToWishlist: (data: IWishlist) => void;

  removeFromWishlist: (id: string) => void;
}

const useWishlistItems = create<WishlistState>()(
  persist(
    (set) => ({
      wishlistItems: [],

      addToWishlist: (data: IWishlist) => {
        set((state) => {
          const isItemInWishlist = state.wishlistItems?.find(
            (item) => item?._id === data?._id
          );

          if (isItemInWishlist) {
            return { ...state };
          } else {
            return {
              ...state,
              wishlistItems: [...state.wishlistItems, data],
            };
          }
        });
      },

      removeFromWishlist: (id: string) => {
        set((state) => {
          return {
            ...state,
            wishlistItems: state?.wishlistItems?.filter(
              (item) => item?._id !== id
            ),
          };
        });
      },
    }),
    {
      name: "wishlist-items",
      partialize: (state) => ({ wishlistItems: state.wishlistItems }),
    }
  )
);

export { useWishlistItems };
