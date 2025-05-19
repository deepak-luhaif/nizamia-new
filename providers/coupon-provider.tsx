"use client";

import { create } from "zustand";

interface ICoupon {
  _id: string;
  coupon_code: string;
  discount: number;
  min_cart_value: number;
  discount_type: string;
  max_discount_amount: number;
  expiry_date: string;
  max_apply: number;
  coupon_category: string;
  coupon_products: string;
  coupon_vendors: string;
  coupon_apply_count: number;
}

const useCouponData = create((set) => ({
  couponData: null,
  codCharges: 0,

  couponCode: "",
  isCouponApplied: false,
  discount: null,

  setCouponCode: (couponCode: string) => {
    set({ couponCode });
  },

  setIsCouponApplied: (isCouponApplied: boolean) => {
    set({ isCouponApplied });
  },

  setDiscount: (discount: number) => {
    set({ discount });
  },

  setCouponData: (data: ICoupon) => {
    set({ couponData: data });
  },

  setCodCharges: (codCharges: number = 0) => {
    set({ codCharges });
  },

  resetCouponState: () => {
    return {
      couponData: null,
      codCharges: 0,

      couponCode: "",
      isCouponApplied: false,
      discount: null,
    };
  },
}));

export { useCouponData };
