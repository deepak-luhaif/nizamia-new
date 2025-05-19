import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

interface Event {
  color: string;
  category: string;
  title: string;
  author: string;
  location: string;
}

export default function EventsTable() {
  const events: Event[] = [
    {
      color: 'bg-orangeColor',
      category: 'Food Distribution',
      title: 'Food Distribution Program 2025',
      author: 'Ankit Pandey',
      location: '24/A New Town',
    },
    {
      color: 'bg-greenColor',
      category: 'Food Distribution',
      title: 'Food Distribution Program 2025',
      author: 'Ankit Pandey',
      location: '24/A New Town',
    },
    {
      color: 'bg-lightOrange',
      category: 'Food Distribution',
      title: 'Food Distribution Program 2025',
      author: 'Ankit Pandey',
      location: '24/A New Town',
    },
  ];

  return (
    <div className='bg-white'>
      <div className='mt-8 overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow className=' bg-lightOrange '>
              <TableHead className='py-7 px-6 text-white font-roboto text-sm '>
                Date
              </TableHead>
              <TableHead className='py-7 px-6 text-white font-roboto text-sm'>
                Event Details
              </TableHead>
              <TableHead className='py-7 px-6 text-white font-roboto text-sm'>
                Author
              </TableHead>
              <TableHead className='py-7  px-6 text-white font-roboto text-sm'>
                Location
              </TableHead>
              <TableHead className='py-7 px-6 text-white font-roboto text-sm'>
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index} className='border-b'>
                <TableCell className='p-6'>
                  <div
                    className={`flex flex-col items-center justify-center w-24 h-24 rounded-full text-white ${event.color}`}
                  >
                    <span className='text-3xl font-light font-roboto'>25</span>
                    <span className='text-sm font-roboto'>Feb</span>
                  </div>
                </TableCell>
                <TableCell className='p-6'>
                  <div className='text-orangeColor font-caveat text-lg'>
                    {event.category}
                  </div>
                  <h3 className='text-2xl font-medium text-blueColor'>
                    {event.title}
                  </h3>
                </TableCell>
                <TableCell className='p-6'>
                  <div className='flex items-center gap-2 text-blueColor'>
                    <div className='w-8 h-8 bg-gray-100 rounded-full' />
                    <span className='font-roboto'>{event.author}</span>
                  </div>
                </TableCell>
                <TableCell className='p-6'>
                  <div className='flex items-center gap-2 text-blueColor'>
                    <MapPin className='w-4 h-4' />
                    <span className='font-roboto'>{event.location}</span>
                  </div>
                </TableCell>
                <TableCell className='p-6'>
                  <Button
                    variant='outline'
                    className='rounded-full text-blueColorfont-medium px-6'
                  >
                    Book Your Test
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
