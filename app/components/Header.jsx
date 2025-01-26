"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo_light from "../logo_light.png";

export default function Header() {
  return (
    <header className="flex items-center justify-around h-[70px] shadow-lg max-[550px]:w-[200px] max-[550px]:h-[50px] max-[550px]:rounded-[25px] border-2 border-solid mx-auto max-[550px]:mt-[10px]">
      <section className="cursor-pointer flex items-center gap-[10px]">
        <Image
          src={logo_light}
          alt="MyTxweDEVS logo"
          className="hover:scale-[1.2] duration-500 w-[53px] h-[53px] max-[550px]:w-[30px] max-[550px]:h-[30px]"
        />
        <p className="text-black text-xl max-[550px]:hidden">MyTxweDEVS</p>
      </section>
      <section className="flex gap-[15px]">
        <div className="relative group">
          <Link href="/" className="text-black max-[550px]:text-[12px]">
            Home
          </Link>
          <div className="absolute w-[0%] h-[2px] group-hover:w-[100%] duration-500 bg-black"></div>
        </div>
        <div className="relative group">
          <Link href="/" className="text-black max-[550px]:text-[12px]">
            Blog
          </Link>
          <div className="absolute w-[0%] h-[2px] group-hover:w-[100%] duration-500 bg-black"></div>
        </div>
        <div className="relative group">
          <Link href="/" className="text-black max-[550px]:text-[12px]">
            Service
          </Link>
          <div className="absolute w-[0%] h-[2px] group-hover:w-[100%] duration-500 bg-black"></div>
        </div>
      </section>
      <section className="flex relative max-[550px]:hidden">
        <input
          type="text"
          className="border-2 border-solid border-[#d9d9d9] rounded-[8px] h-[30px] w-[150px] pl-[30px] pr-[12px] outline-2 text-[#5263ff] text-[13px] outline-solid outline-blue-400"
          placeholder="Search..."
        />
        <svg
          className="absolute top-[5px] left-[5px]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#d9d9d9"
            fillRule="evenodd"
            d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
            clip-rule="evenodd"
          />
        </svg>
      </section>
    </header>
  );
}
