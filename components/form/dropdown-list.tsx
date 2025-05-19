"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DropdownList({
  form,
  dropdown_options,
  name,
  title,
}: any) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col pt-2">
          <FormLabel> {title}</FormLabel>
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value && dropdown_options
                    ? dropdown_options?.find(
                        (option: any) => option.value === field.value
                      )?.label
                    : `Select ${title}`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 z-[10000]">
              <Command>
                <CommandInput placeholder="Search ..." />
                <CommandList>
                  <CommandEmpty>No record found.</CommandEmpty>
                  <CommandGroup>
                    {dropdown_options &&
                      dropdown_options?.map((option: any) => (
                        <CommandItem
                          value={option.label}
                          key={option.value}
                          onSelect={() => {
                            form.setValue(`${name}`, option.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              option.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {option.label}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
