"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { config } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const onPageScroll = () => {
    const navHeight = 82;
    if (window.scrollY > navHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onPageScroll);
    () => {
      document.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header
      className={`py-6 fixed w-full z-50 delay-75 transition-colors ${
        scrolled ? "bg-white shadow-sm" : ""
      }`}
    >
      <div className="container max-w-6xl flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            priority={true}
            alt="Logo"
            style={{
              width: "120px",
            }}
          />
        </Link>
        <div className="hidden md:block">
          <div className="flex gap-4 items-center">
            {config.header.leftMenu.map((menu, index) => (
              <Link
                href={menu.id}
                className="text-slate-500 hover:text-slate-950 cursor-pointer"
                key={index.toString()}
                property=""
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          {config.header.rightMenu.map((menu, index) => (
            <Link
              href={"#"}
              className=" border border-green-600 py-2 px-4 text-green-600 hover:bg-green-600 transition-all delay-75 hover:text-white rounded-sm cursor-pointer"
              key={index.toString()}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet modal key={212}>
            <SheetTrigger asChild>
              <HamburgerMenuIcon
                className="text-slate-400"
                width={24}
                height={24}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetDescription>
                <div className="flex flex-col gap-4 items-center mt-4">
                  {config.header.leftMenu.map((menu, index) => (
                    <Link
                      href={menu.id}
                      className="text-lg text-slate-400 hover:text-slate-950 cursor-pointer"
                      key={index.toString()}
                      property=""
                    >
                      <SheetClose>{menu.name}</SheetClose>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4 items-center mt-6">
                  {config.header.rightMenu.map((menu, index) => (
                    <Link
                      href={"#"}
                      className="text-lg border border-green-600 py-2 px-5 hover:bg-green-600 transition-all delay-75 hover:text-white rounded-sm cursor-pointer"
                      key={index.toString()}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
