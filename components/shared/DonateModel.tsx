'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import * as z from 'zod';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { usePathname } from 'next/navigation';

// 🛠️ Zod Schema for Validation
const donationSchema = z.object({
  amount: z.string().min(1, 'Amount is required'),
  currency: z.string().min(1, 'Currency is required'),
  category: z.string().min(1, 'Category is required'),
});

const DonateModal = () => {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: '',
      currency: 'USD',
      category: '',
    },
  });

  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    console.log('Donation Data:', data);
    setOpen(false); // Close modal on successful submit
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={`bg-greenColor font-semibold w-full  ${
            pathname === '/' ? 'rounded-3xl' : 'rounded-sm'
          }`}
        >
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-lg p-6 rounded-lg'>
        <div className='relative w-full h-[400px]'>
          {/* Background Image */}
          <Image
            src={'/assets/images/why.png'}
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
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center'
          >
            <h3 className='text-white font-bold text-3xl'>Support Us</h3>
            <p className='text-base text-white mt-2'>
              Make a Difference, Change Lives Today!
            </p>

            {/* Category Dropdown */}
            <div className='mt-4 px-10'>
              <Select
                onValueChange={(value) => setValue('category', value)}
                defaultValue={watch('category')}
              >
                <SelectTrigger className='w-full bg-transparent text-white font-bold py-3 px-4 rounded-3xl border focus:ring-0 focus:ring-offset-0 focus:outline-none'>
                  <SelectValue placeholder='Select Cause' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Donation Category</SelectLabel>
                    <SelectItem value='General Charity'>
                      General Charity
                    </SelectItem>
                    <SelectItem value='Feeding Program Fund'>
                      Feeding Program Fund
                    </SelectItem>
                    <SelectItem value='Healthcare Support Fund'>
                      Healthcare Support Fund
                    </SelectItem>
                    <SelectItem value='Education Fund'>
                      Education Fund
                    </SelectItem>
                    <SelectItem value='Skill Training Fund'>
                      Skill Training Fund
                    </SelectItem>
                    <SelectItem value='Women Empowerment Fund'>
                      Women Empowerment Fund
                    </SelectItem>
                    <SelectItem value='Emergency & Seasonal Relief Fund'>
                      Emergency & Seasonal Relief Fund
                    </SelectItem>
                    <SelectItem value='Water Accessibility Fund'>
                      Water Accessibility Fund
                    </SelectItem>
                    <SelectItem value='Ramadan Iftar Appeal'>
                      Ramadan Iftar Appeal
                    </SelectItem>
                    <SelectItem value='Cataract Surgeries Fund'>
                      Cataract Surgeries Fund
                    </SelectItem>
                    <SelectItem value='General Surgeries Fund'>
                      General Surgeries Fund
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Input & Currency Select */}
            <div className='relative mt-4 px-10'>
              <Input
                {...register('amount')}
                className='rounded-3xl bg-transparent text-white border-y border-x-0 focus-visible:ring-0 placeholder:text-white border-inputColor py-6 lg:px-10 px-16 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-none'
                placeholder='Enter amount'
              />
              <Badge className='bg-darkBlue px-5 py-4 absolute lg:-left-4 left-2 top-0 font-bold'>
                Amount
              </Badge>

              <Select
                onValueChange={(value) => setValue('currency', value)}
                defaultValue={watch('currency')}
              >
                <SelectTrigger className='w-[90px] bg-greenColor text-white font-bold py-6 px-4 rounded-full border-0 focus:ring-0 focus:ring-offset-0 focus:outline-none absolute top-0 lg:-right-4 right-2'>
                  <SelectValue placeholder='USD' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Currency</SelectLabel>
                    <SelectItem value='USD'>USD</SelectItem>
                    <SelectItem value='RS'>Rs.</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Error Messages */}
            {errors.amount && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.amount.message}
              </p>
            )}
            {errors.category && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.category.message}
              </p>
            )}

            {/* Amount Buttons */}
            <div className='flex flex-row gap-5 justify-between mt-7 '>
              {[5, 10, 50, 100].map((amt) => (
                <Button
                  key={amt}
                  className='bg-darkBlue rounded-full h-full font-semibold p-4 px-5'
                  type='button'
                  onClick={() => setValue('amount', amt.toString())}
                >
                  {amt}
                </Button>
              ))}
              <Button
                className='bg-lightOrange rounded-3xl font-semibold py-6 px-5'
                type='submit'
              >
                Donate
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;
