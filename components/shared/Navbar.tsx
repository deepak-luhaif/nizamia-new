"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { initiatives } from "@/constant/initiatives";
import DonateModal from "./DonateModel";
import RazorpayDonateButton from "../razorpay-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // State for submenu
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full flex flex-row justify-between items-center z-50 transition-all duration-300 container-box lg:py-2 py-2 font-roboto",
        pathname === "/" && !scrolled ? "bg-transparent" : "bg-white shadow-md"
      )}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          height={0}
          width={0}
          sizes="100vw"
          className="lg:h-20 h-10 w-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {[
          { name: "Home", path: "/" },
          { name: "Who We Are", path: "/about" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "text-lg font-medium transition-all",
              pathname === item.path
                ? "text-greenColor font-semibold"
                : "text-darkGray hover:text-greenColor"
            )}
          >
            {item.name}
          </Link>
        ))}

        {/* Dropdown for "What We Do" (Moved Next to "Who We Are") */}
        <div
          className="relative group"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <button className="flex items-center gap-2 text-lg font-medium transition-all text-darkGray">
            What We Do <ChevronDown className="h-5 w-5" />
          </button>

          {submenuOpen && (
            <div className="absolute left-0 mt-0 w-60 bg-white shadow-lg rounded-lg p-2 flex flex-col">
              {Object.values(initiatives).map((item) => (
                <Link
                  key={item.id}
                  href={`/what-we-do/${item.id}`}
                  className={cn(
                    "px-4 py-2 transition-all rounded",
                    pathname === `/what-we-do/${item.id}`
                      ? "text-greenColor font-semibold bg-gray-200"
                      : "text-darkGray hover:bg-gray-100"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href={`/what-we-do/inspiring-charity-gift`}
                className={cn(
                  "px-4 py-2 transition-all rounded",
                  pathname === `/what-we-do/inspiring-charity-gift`
                    ? "text-greenColor font-semibold bg-gray-200"
                    : "text-darkGray hover:bg-gray-100"
                )}
              >
                Inspiring Charity Gift
              </Link>
            </div>
          )}
        </div>

        {/* Other Navigation Items */}
        {[
          { name: "Knowledge Hub", path: "/knowledge-hub" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "text-lg font-medium transition-all",
              pathname === item.path
                ? "text-greenColor font-semibold"
                : "text-darkGray hover:text-greenColor"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (Right-Side Drawer) */}
      <div className="md:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button>
              <Menu className="h-4 w-4 text-darkGray" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="w-3/4 h-full fixed top-0 right-0 p-0">
            <div className="h-full w-full bg-white shadow-lg flex flex-col p-5">
              {/* Close Button Inside Drawer */}
              <div className="flex justify-end">
                <DrawerClose asChild>
                  <button className="text-darkGray">
                    <X className="h-6 w-6" />
                  </button>
                </DrawerClose>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col items-center gap-5 mt-5">
                {[
                  { name: "Home", path: "/" },
                  { name: "Who We Are", path: "/about" },
                ].map((item) => (
                  <DrawerClose asChild key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        "text-lg font-medium w-full  py-2 transition-all",
                        pathname === item.path
                          ? "text-greenColor font-semibold"
                          : "text-darkGray hover:text-greenColor"
                      )}
                    >
                      {item.name}
                    </Link>
                  </DrawerClose>
                ))}

                {/* "What We Do" with Mobile Submenu */}
                <div className="w-full">
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="text-lg font-medium w-full  py-2 flex  items-center gap-2 text-darkGray"
                  >
                    What We Do <ChevronDown className="h-5 w-5" />
                  </button>

                  {submenuOpen && (
                    <div className="flex flex-col bg-gray-100 p-2 rounded">
                      {Object.values(initiatives).map((item) => (
                        <DrawerClose asChild key={item.id}>
                          <Link
                            href={`/what-we-do/${item.id}`}
                            className={cn(
                              "px-4 py-2 transition-all rounded",
                              pathname === `/what-we-do/${item.id}`
                                ? "text-greenColor font-semibold bg-gray-200"
                                : "text-darkGray hover:bg-gray-200"
                            )}
                          >
                            {item.title}
                          </Link>
                        </DrawerClose>
                      ))}
                      <DrawerClose asChild>
                        <Link
                          href={`/what-we-do/inspiring-charity-gift`}
                          className={cn(
                            "px-4 py-2 transition-all rounded",
                            pathname === `/what-we-do/inspiring-charity-gift`
                              ? "text-greenColor font-semibold bg-gray-200"
                              : "text-darkGray hover:bg-gray-200"
                          )}
                        >
                          Inspiring Charity Gift
                        </Link>
                      </DrawerClose>
                    </div>
                  )}
                </div>

                {/* Other Pages */}
                {[
                  { name: "Knowledge Hub", path: "/knowledge-hub" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <DrawerClose asChild key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        "text-lg font-medium w-full  py-2 transition-all",
                        pathname === item.path
                          ? "text-greenColor font-semibold"
                          : "text-darkGray hover:text-greenColor"
                      )}
                    >
                      {item.name}
                    </Link>
                  </DrawerClose>
                ))}

                <Button className="bg-greenColor rounded-3xl font-semibold ">
                  Donate Now
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Donation Button */}
      {/* <Button className='bg-greenColor rounded-3xl font-semibold hidden md:flex'>
        Donate Now
      </Button> */}
      <div className="hidden md:flex">
        <a href="https://rzp.io/rzp/MRrhoyaM">
          <Button
            className={`bg-greenColor hover:bg-[#5cbdb0] font-semibold w-full   ${
              pathname === "/" ? "rounded-3xl" : "rounded-sm"
            }`}
          >
            Donate Now
          </Button>
        </a>

        {/* <DonateModal /> */}
      </div>

      {/* <RazorpayDonateButton /> */}
      {/* <a
        className="bg-slate-200 rounded p-2 "
        href="https://rzp.io/rzp/MRrhoyaM"
      >
        Donate now
      </a> */}
    </nav>
  );
}
