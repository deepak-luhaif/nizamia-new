import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function BlogCard() {
  return (
    <Card>
      <Image
        src='/image-1.webp'
        alt='placeholder'
        className='w-full rounded-lg'
        width={0}
        height={0}
        sizes='100vw'
      />
      <CardHeader>
        <CardTitle className='text-md text-foreground'>
          Rajkummar Rao On Face Fillers: “I’m The Kind of Person Who Will Always
          Keep My Chin Up.
        </CardTitle>
      </CardHeader>
      <CardContent className='text-muted-foreground text-sm'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          cupiditate numquam quas, facere est sit eligendi reprehenderit esse
          sunt suscipit ab officia voluptatibus quia nihil, quam dicta magnam
          dolore ut.
        </p>
      </CardContent>
      <CardFooter>
        <div>
          <Button className='text-sm'> Read More </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
