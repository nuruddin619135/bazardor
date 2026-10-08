"use client";
import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import CategoryList from "./CategoryList";
import PriceTicker from "./PriceTicker";

export default function Header() {
  const today = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  const mobileToday = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "short",
  });

  return (
    <div className="max-w-7xl mx-auto px-2 2xl:px-0">
      <div className="flex items-center justify-between gap-3 py-3 ">
        <div className="flex min-w-0 items-center gap-2">
          <div className="shrink-0 rounded-lg bg-green-400 p-1">
            <Link href="/">
              <Image
                className="h-6 w-6 sm:h-7 sm:w-7"
                src={logo}
                alt="Bazardor"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold sm:text-base md:text-lg">
              বাজার দর
            </h3>
            <p className="text-sm text-gray-500 sm:hidden">{mobileToday}</p>
            <p className=" text-gray-500 hidden sm:block">{today}</p>
          </div>
        </div>

        <nav className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/sign-in"
            className="rounded-xl px-2 py-1 text-xs transition hover:bg-gray-100 sm:px-3 sm:text-base"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-xl bg-green-400 px-2 py-1 text-xs text-white transition hover:bg-green-500 sm:px-3 sm:text-base"
          >
            সাইন আপ
          </Link>
        </nav>
      </div>
      <CategoryList />
      <PriceTicker />
    </div>
  );
}
