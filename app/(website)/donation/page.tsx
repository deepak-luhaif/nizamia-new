"use client";

import { useState, useEffect, Suspense } from "react";
import Script from "next/script";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createOrder } from "@/actions/order";
import { toast } from "react-hot-toast";

import { donationOptions } from '@/constant/donation-options';

// Schema for Domestic Donation
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  amount: z.coerce.number().min(1, "Amount must be at least 1"),
  donationType: z.string().min(1, "Please select a fund"),
  pan: z.string().optional(),
  aadhaar: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.amount >= 2000) {
    if (!data.pan) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "PAN Card is compulsory for donations of ₹2000 or more",
        path: ["pan"],
      });
    }
  } else if (data.amount < 2000) {
    // Both PAN or Aadhaar is fine.
    if (!data.pan && !data.aadhaar) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Either PAN Card or Aadhaar Card is required",
        path: ["aadhaar"], // Highlighting Aadhaar field as the primary alternative
      });
       ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Either PAN Card or Aadhaar Card is required",
        path: ["pan"],
      });
    }
  }
});

type FormData = z.infer<typeof formSchema>;

function DonationForm() {
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 100,
      name: "",
      email: "",
      phone: "",
      donationType: "",
      pan: "",
      aadhaar: "",
    },
  });

  useEffect(() => {
    const nameParam = searchParams.get("name") || "";
    const amountParam = searchParams.get("amount");
    const typeParam = searchParams.get("donationType");

    // Ensure the donation type from URL matches exactly one of our options (case-insensitive check)
    const matchedType = donationOptions.find(opt => opt.toLowerCase() === (typeParam || "").toLowerCase()) || "";

    if (nameParam || amountParam || matchedType) {
        reset({
            name: nameParam,
            amount: amountParam ? Number(amountParam) : 100,
            donationType: matchedType,
            email: "",
            phone: "",
            pan: "",
            aadhaar: "",
        });
    }
  }, [searchParams, reset]);

  const watchAmount = watch("amount");

  const onSubmit = async (data: FormData) => {
    if (!razorpayLoaded) {
      toast.error("Payment gateway failed to load. Please refresh.");
      return;
    }

    setLoading(true);
    try {
      const orderResponse = await createOrder({
        amount: data.amount,
        currency: "INR",
      });

      if (orderResponse.error || !orderResponse.data) {
        throw new Error(orderResponse.error || "Failed to create order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderResponse.data.order.amount,
        currency: orderResponse.data.order.currency,
        name: "Nizamia Charity Trust",
        description: "Donation",
        order_id: orderResponse.data.order.id,
        handler: function (response: any) {
          toast.success("Donation successful! Thank you.");
          console.log(response);
          reset();
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },
        notes: {
            pan: data.pan,
            aadhaar: data.aadhaar,
            donation_type: data.donationType
        },
        // theme: {
        //   color: "#22c55e", // green-500
        // },
      };

      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="max-w-2xl mx-auto">
        <Script
            id="razorpay-checkout-js"
            src="https://checkout.razorpay.com/v1/checkout.js"
            onLoad={() => setRazorpayLoaded(true)}
        />
        <h1 className="text-4xl font-bold text-center mb-8 text-greenColor">
          Make a Donation
        </h1>

        <Tabs defaultValue="domestic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="domestic">Domestic Donation</TabsTrigger>
            <TabsTrigger value="international">International Donation</TabsTrigger>
          </TabsList>

          <TabsContent value="domestic">
            <Card>
              <CardHeader>
                <CardTitle>Domestic Donation (INR)</CardTitle>
                <CardDescription>
                  Support our cause with a secure domestic donation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-darkGray">Full Name <span className="text-red-500">*</span></Label>
                        <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="amount" className="text-darkGray">Amount (₹) <span className="text-red-500">*</span></Label>
                        <Input
                        id="amount"
                        type="number"
                        placeholder="1000"
                        {...register("amount")}
                        className={errors.amount ? "border-red-500" : ""}
                        />
                         {errors.amount && <p className="text-red-500 text-xs">{errors.amount.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                     <Label className="text-darkGray">Select Fund <span className="text-red-500">*</span></Label>
                     <Controller
                        name="donationType"
                        control={control}
                        render={({ field }) => (
                            <Select 
                                onValueChange={field.onChange} 
                                value={field.value} 
                                key={field.value} // Force re-render when value changes to ensure visual update
                            >
                            <SelectTrigger className={errors.donationType ? "border-red-500" : ""}>
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
                    {errors.donationType && <p className="text-red-500 text-xs">{errors.donationType.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-darkGray">Email <span className="text-red-500">*</span></Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-darkGray">Phone <span className="text-red-500">*</span></Label>
                        <Input
                        id="phone"
                        type="tel"
                        placeholder="9876543210"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>
                  </div>

                    <div className="p-4 bg-gray-50 rounded-lg space-y-4 border">
                        <h3 className="font-semibold text-darkGray">Identity Proof</h3>
                        <p className="text-xs text-gray-500">
                             {watchAmount >= 2000 
                                ? "PAN Card is mandatory for donations of ₹2000 or above." 
                                : "Aadhaar Card or PAN Card is required for donations below ₹2000."}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="pan" className="text-darkGray">
                                    PAN Card Number {watchAmount >= 2000 && <span className="text-red-500">*</span>}
                                </Label>
                                <Input
                                id="pan"
                                placeholder="ABCDE1234F"
                                {...register("pan")}
                                className={errors.pan ? "border-red-500" : ""}
                                />
                                {errors.pan && <p className="text-red-500 text-xs">{errors.pan.message}</p>}
                            </div>

                             <div className="space-y-2">
                                <Label htmlFor="aadhaar" className="text-darkGray">
                                    Aadhaar Card Number {watchAmount < 2000 && <span className="text-gray-400 text-xs">(Optional)</span>}
                                </Label>
                                <Input
                                id="aadhaar"
                                placeholder="1234 5678 9012"
                                disabled={watchAmount >= 2000} 
                                {...register("aadhaar")}
                                className={errors.aadhaar ? "border-red-500" : ""}
                                />
                                {errors.aadhaar && <p className="text-red-500 text-xs">{errors.aadhaar.message}</p>}
                            </div>
                        </div>
                    </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-greenColor hover:bg-[#5cbdb0] text-white font-bold py-3 rounded-md transition-colors"
                    disabled={loading}
                  >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        `Donate ₹${watchAmount || 0}`
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="international">
            <Card>
              <CardHeader>
                <CardTitle>International Donation</CardTitle>
                {/* <CardDescription>
                  For international donors, please follow the instructions below.
                </CardDescription> */}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* <div className="p-4 bg-blue-50 text-blue-800 rounded-md">
                    <p className="font-medium">International Donations Info</p>
                    <p className="text-sm mt-2">
                        We currently accept international donations through direct bank transfer or specific FCRA compliant gateways. 
                        Please contact us for details.
                    </p>
                </div> */}
                <p>Temporarily unavailable</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  )
}

export default function DonationPage() {
    return (
        <div className="container mx-auto py-10 px-4 min-h-screen">
            <Suspense fallback={<div className="flex items-center justify-center p-10"><Loader2 className="w-8 h-8 animate-spin text-greenColor" /></div>}>
                <DonationForm />
            </Suspense>
        </div>
    )
}
