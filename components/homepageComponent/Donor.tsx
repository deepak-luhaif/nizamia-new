"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createOrder } from "@/actions/order";
import Script from "next/script";

const donationOptions = [
  "General Charity",
  "Feeding Program Fund",
  "Healthcare Support Fund",
  "Education Fund",
  "Skill Training Fund",
  "Women Empowerment Fund",
  "Emergency & Seasonal Relief Fund",
  "Water Accessibility Fund",
  "Ramadan Iftar Appeal",
  "Cataract Surgeries Fund",
  "General Surgeries Fund",
];

const donationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  donationType: z.string().min(1, "Please select a fund"),
  // amount: z.string().min(1, 'Amount is required'),

  currency: z.string().min(1, "Currency is required"),
});

const Donor = () => {
  const [amount, setAmount] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(donationSchema),
  });

  const onSubmit = async (data: any) => {
    console.log("data", data);

    return;

    const orderResponse = await createOrder({
      ...data,
      amount,
    });

    if (orderResponse.error) {
      alert(orderResponse.error);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: orderResponse.data.order.amount,
      currency: orderResponse.data.order.currency,
      name: "Nizmaia",
      description: "Nizmaia Charity Trust",
      order_id: orderResponse.data.order.id,
      handler: function (response: any) {
        alert("Payment successful!");
        console.log(response);
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: "9784749117",
      },
      theme: { color: "#3399cc" },
    };

    // @ts-ignore
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      {/* <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => console.log("Razorpay script loaded")}
      /> */}

      <div className="bg-blueColor container-box">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-5 justify-between items-center"
        >
          <div>
            <p className="text-xs text-greenColor font-semibold text-center lg:text-start">
              Make Donation
            </p>
            <h1 className="text-2xl font-semibold text-white mt-1">
              Become A Donor
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 w-full lg:w-auto">
            <Input
              className="rounded-3xl bg-transparent border border-inputColor py-6 px-4 outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-none focus-visible:ring-0 "
              placeholder="Enter Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
            {/* <Input
              className='rounded-3xl bg-transparent border border-inputColor py-6 px-4 outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-none focus-visible:ring-0 '
              placeholder='Enter Email'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-red-500 text-xs'>{errors.email.message}</p>
            )} */}
            <Controller
              name="donationType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-transparent border border-inputColor text-white rounded-full h-full font-semibold py-4 px-4 outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 ">
                    <SelectValue placeholder="Select Fund" />
                  </SelectTrigger>
                  <SelectContent>
                    {donationOptions.map((option, index) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.donationType && (
              <p className="text-red-500 text-xs">
                {errors.donationType.message}
              </p>
            )}
            <div className="relative w-full">
              <Input
                name="amount"
                className="bg-transparent border border-inputColor text-white rounded-full h-full font-semibold py-4 px-4 pr-14 w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-none focus-visible:ring-0 "
                placeholder="Enter Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <Controller
                  name="currency"
                  control={control}
                  defaultValue="INR"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-none focus-visible:ring-0  text-white rounded-full h-full font-semibold py-4 px-1">
                        <SelectValue placeholder="Rs." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">RS.</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            {errors.amount && (
              <p className="text-red-500 text-xs">{errors.amount.message}</p>
            )}
            <Button
              type="submit"
              className="bg-lightOrange hover:bg-[#d14e3a] rounded-3xl font-semibold py-6 px-5"
            >
              <a href="https://rzp.io/rzp/MRrhoyaM">Make A Donation</a>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donor;
