'use client';
import { create } from 'zustand';
interface WishlistState {
  isWishlistMenuOpen: boolean;
  toggleWishlistMenu: () => void;
  closeWishlistMenu: () => void;
}

const useWishlistMenu = create<WishlistState>()((set) => ({
  isWishlistMenuOpen: false,
  toggleWishlistMenu: () =>
    set((state) => ({ isWishlistMenuOpen: !state.isWishlistMenuOpen })),
  closeWishlistMenu: () => set((state) => ({ isWishlistMenuOpen: false })),
}));

export { useWishlistMenu };
