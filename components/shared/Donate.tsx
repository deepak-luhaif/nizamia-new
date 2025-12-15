'use client';
import Image from 'next/image';
import React from 'react';
import * as z from 'zod';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { donationOptions } from '@/constant/donation-options';

// 🛠️ Zod Schema for Validation
const donationSchema = z.object({
  amount: z.coerce.number().min(1, 'Amount must be at least 1'),
  donationType: z.string().min(1, 'Please select a fund'),
});

type FormData = z.infer<typeof donationSchema>;

const Donate = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: 0,
      donationType: '',
    },
  });

  const onSubmit = (data: FormData) => {
    // Construct query parameters
    const params = new URLSearchParams({
        amount: data.amount.toString(),
        donationType: data.donationType,
    });

    // Redirect to donation page
    router.push(`/donation?${params.toString()}`);
  };

  return (
    <div className='relative w-full h-[400px]'> 
      {/* Background Image */}
      <Image
        src={'/assets/images/shoot/donate.jpg'}
        alt='why'
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-full absolute top-0 left-0 object-cover z-0 rounded-2xl'
      />

      {/* Blue Overlay */}
      <div className='lg:absolute top-0 left-0 w-full h-full bg-blueColor opacity-70 z-10 rounded-2xl block'></div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center  w-full lg:px-10'
      >
        <h3 className='text-white font-bold text-3xl'>Support Us</h3>
        <p className='text-base text-white mt-2'>
          Make a Difference, Change Lives Today!
        </p>

        {/* Category Dropdown */}
        <div className='mt-8 px-10'>
         <Controller
            name='donationType'
            control={control}
            render={({ field }) => (
            <Select
                onValueChange={field.onChange}
                value={field.value}
            >
                <SelectTrigger className='w-full bg-transparent text-white font-bold py-6 px-4 rounded-3xl border focus:ring-0 focus:ring-offset-0 focus:outline-none'>
                <SelectValue placeholder='Select Cause' />
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
            <p className='text-red-500 text-sm mt-1 text-left'>{errors.donationType.message}</p>
        )}
        </div>

        {/* Input & Currency Static */}
        <div className='relative mt-4 px-10'>
          <Input
            {...register('amount')}
            type="number"
            className='rounded-3xl bg-transparent text-white border-y border-x-0 focus-visible:ring-0 placeholder:text-gray-300 border-inputColor py-6 lg:px-10 px-16 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            placeholder='Enter amount'
          />
          <Badge className='bg-darkBlue px-5 py-4 absolute lg:-left-4 left-2 top-0 font-bold'>
            Amount
          </Badge>

          <div className='absolute top-0 lg:-right-4 right-2 w-[90px] h-full flex items-center justify-center bg-greenColor text-white font-bold rounded-full'>
            INR
          </div>
        </div>

        {/* Error Messages */}
        {errors.amount && (
          <p className='text-red-500 text-sm mt-1 px-10 text-left'>{errors.amount.message}</p>
        )}

        {/* Buttons */}
        <div className='flex flex-row gap-5 justify-center mt-7 pr-10'>
            <Button
              className="bg-lightOrange hover:bg-[#d14e3a] rounded-3xl font-semibold py-6 px-8 text-white"
              type="submit"
            >
              Donate
            </Button>
        </div>
      </form>
    </div>
  );
};

export default Donate;
