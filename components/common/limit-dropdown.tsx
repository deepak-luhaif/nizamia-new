'use client';
import React, { useCallback, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import * as qs from 'qs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export default function LimitDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const params = new URLSearchParams(searchParams);
  const query = qs.parse(params.toString());
  const [searchTerm, setSearchTerm] = useState<string | number>(
    query && query.limit ? Number(query.limit) : 10
  );
  const createQueryString = useCallback(
    (value: string | number) => {
      let newQuery = {
        ...query,
        limit: Number(value),
      };

      const queryString = qs.stringify(newQuery, {
        encodeValuesOnly: true,
      });
      return queryString;
    },
    [searchParams]
  );

  const searchHandler = (value: string) => {
    const search = value;
    setSearchTerm(search);

    if (search.length > 0) {
      router.push(pathname + '?' + createQueryString(search));
    } else {
      router.push(pathname);
    }
  };

  return (
    <Select
      onValueChange={(value) => searchHandler(value)}
      value={searchTerm.toString()}
    >
      <SelectTrigger className='w-auto'>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='10'>10</SelectItem>
        <SelectItem value='25'>25</SelectItem>
        <SelectItem value='50'>50</SelectItem>
        <SelectItem value='100'>100</SelectItem>
      </SelectContent>
    </Select>
  );
}
