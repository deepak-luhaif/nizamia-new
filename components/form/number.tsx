import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

export default function NumberField({ form, name, title }: any) {
  return (
    <FormField
      control={form.control}
      name={`${name}`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type='number'
              onChange={(e) => form.setValue(`${name}`, Number(e.target.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
