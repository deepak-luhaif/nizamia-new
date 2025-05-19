'use client';
import { create } from 'zustand';
interface CartState {
  isCartMenuOpen: boolean;
  toggleCartMenu: () => void;
  closeCartMenu: () => void;
}

const useCartMenu = create<CartState>()((set) => ({
  isCartMenuOpen: false,
  toggleCartMenu: () =>
    set((state) => ({ isCartMenuOpen: !state.isCartMenuOpen })),
  closeCartMenu: () => set((state) => ({ isCartMenuOpen: false })),
}));

export { useCartMenu };
