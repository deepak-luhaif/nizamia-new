"use client";

import { create } from "zustand";

const useCoinCount = create((set) => ({
  coinCount: 0,
  coinState: null,
  isCoinsApplied: false,
  coinDiscount: null,

  setCoinState: (coinState: string) => {
    set({ coinState });
  },

  setIsCoinsApplied: (isCoinsApplied: boolean) => {
    set({ isCoinsApplied });
  },

  setCoinCount: (coinCount: number) => {
    set({ coinCount });
  },

  setCoinDiscount: (coinDiscount: number) => {
    set({ coinDiscount });
  },

  resetCoinState: () => {
    return {
      coinCount: 0,
      coinState: null,
      isCoinsApplied: false,
      coinDiscount: null,
    };
  },
}));

export { useCoinCount };
