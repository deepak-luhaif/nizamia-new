import { Card } from '@/components/ui/card';
import { MapPin, Users } from 'lucide-react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  variant: 'location' | 'users';
}

export function WhyCard({
  number,
  title,
  description,
  variant,
}: FeatureCardProps) {
  const bgColor = variant === 'location' ? 'bg-greenColor' : 'bg-orangeColor';
  const textColor = variant === 'location' ? 'text-white' : 'text-white';
  const Icon = variant === 'location' ? MapPin : Users;

  return (
    <Card className='relative p-6 overflow-hidden shadow-lg'>
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${bgColor} `}
      />
      <div className={`absolute top-6 right-6 p-2 rounded-full `}>
        <Icon className={`w-8 h-8 ${textColor}`} />
      </div>
      <div className='space-y-4'>
        <span
          className={`text-[80px] font-bold text-greenColor [font-feature-settings:'tnum'] font-roboto`}
          style={{
            WebkitTextStroke: '1px currentColor',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {number.padStart(2, '0')}
        </span>
        <div className='space-y-2'>
          <h3 className='text-xl font-semibold text-blueColor'>{title}</h3>
          <p className='text-darkGray'>{description}</p>
        </div>
      </div>
    </Card>
  );
}
