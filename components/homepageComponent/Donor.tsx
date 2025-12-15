'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { donationOptions } from '@/constant/donation-options';

const donorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  donationType: z.string().min(1, 'Please select a fund'),
  amount: z.coerce.number().min(1, 'Amount must be at least 1'),
  currency: z.string().default('INR'),
});

type FormData = z.infer<typeof donorSchema>;

const Donor = () => {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(donorSchema),
    defaultValues: {
      amount: 0,
      currency: 'INR',
      name: '',
      donationType: '',
    },
  });

  const watchAmount = watch('amount');

  const onSubmit = (data: FormData) => {
    // Construct query parameters
    const params = new URLSearchParams({
        name: data.name,
        amount: data.amount.toString(),
        donationType: data.donationType,
    });

    // Redirect to donation page
    router.push(`/donation?${params.toString()}`);
  };

  return (
    <>
      <div className='bg-blueColor container-box'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col lg:flex-row gap-5 justify-between items-center'
        >
          <div>
            <p className='text-xs text-greenColor font-semibold text-center lg:text-start'>
              Make Donation
            </p>
            <h1 className='text-2xl font-semibold text-white mt-1'>
              Become A Donor
            </h1>
          </div>
          <div className='flex lg:flex-row flex-col gap-4 w-full lg:w-auto'>
            <Input
              className='rounded-3xl bg-transparent border border-inputColor py-6 px-4 outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-none focus-visible:ring-0 '
              placeholder='Enter Name'
              {...register('name')}
            />
            {errors.name && (
              <p className='text-red-500 text-xs'>{errors.name.message}</p>
            )}
            <Controller
              name='donationType'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className='bg-transparent border border-inputColor text-white rounded-full h-full font-semibold py-4 px-4 outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 '>
                    <SelectValue placeholder='Select Fund' />
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
              <p className='text-red-500 text-xs'>
                {errors.donationType.message}
              </p>
            )}
            <div className='relative w-full'>
              <Input
                className='bg-transparent border border-inputColor text-white rounded-full h-full font-semibold py-4 px-4 pr-14 w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none outline-none focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-none focus-visible:ring-0 '
                placeholder='Enter Amount'
                type='number'
                {...register('amount')}
              />
              <div className='absolute right-0 top-1/2 transform -translate-y-1/2 h-full flex items-center pr-4'>
                  <span className='text-white font-semibold'>INR</span>
              </div>
            </div>
            {errors.amount && (
              <p className='text-red-500 text-xs'>{errors.amount.message}</p>
            )}
            <Button
              type='submit'
              className='bg-lightOrange hover:bg-[#d14e3a] rounded-3xl font-semibold py-6 px-5'
            >
              Make A Donation
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donor;
