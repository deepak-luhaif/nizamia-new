"use server";

import axios from "axios";

export const createOrder = async ({ amount, currency }: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4213";
    const { data } = await axios.post(`${baseUrl}/api/order`, {
      amount,
      currency,
    });

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: "Failed to create order",
    };
  }
};
