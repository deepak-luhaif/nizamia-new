'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import * as qs from 'qs';
type SearchParamsInterface = {
  search: {
    [key: string]: string;
  };
};
export const SearchInput = ({ name }: { name: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const params = new URLSearchParams(searchParams);
  const query = qs.parse(params.toString()) as SearchParamsInterface;
  const [searchTerm, setSearchTerm] = useState(
    query ? query.search && query.search[name]! && query.search[name]! : ''
  );

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      let newQuery = {
        ...query,
        search: {
          [name]: value.toString(),
        },
      };

      const queryString = qs.stringify(newQuery, {
        encodeValuesOnly: true,
      });
      return queryString;
    },
    [searchParams]
  );

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchTerm(search);

    if (search.length > 0) {
      router.push(pathname + '?' + createQueryString(name, search));
    } else {
      router.push(pathname);
    }
  };

  return (
    <div>
      <div className='flex items-center lg:w-72  relative'>
        <Input
          placeholder='Search'
          onChange={searchHandler}
          value={searchTerm ? searchTerm : ''}
        />
        <Search className='w-4 h-4 absolute lg:right-5 right-3 ' />
      </div>
    </div>
  );
};
