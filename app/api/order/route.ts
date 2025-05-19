import { NextResponse } from "next/server";

import Razorpay from "razorpay";

export async function POST(request: Request) {
  try {
    const { amount = "INR", currency } = await request.json();

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: amount * 100,
      currency,
      receipt: `reciept_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
