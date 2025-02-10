import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo_light from "../logo_light.png";

export default function Header() {
  return (
    <header className="flex items-center justify-around h-[70px] shadow-lg">
      <section className="cursor-pointer flex items-center gap-[10px]">
        <Image src={logo_light} width={53} height={53} alt="MyTxweDEVS logo"/>
        <p className="text-black text-xl">MyTxweDEVS</p>
      </section>
      <section className="flex gap-[15px]">
        <Link href="/" className="text-black">Home</Link>
        <Link href="/" className="text-black">Blog</Link>
        <Link href="/" className="text-black">Service</Link>
      </section>
      <section className="flex">
        <button className="rounded-xl bg-black text-white p-2">Contact Me</button>
      </section>
    </header>
  );
}
