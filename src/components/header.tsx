"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  { title: "HOME", path: "/" },
  { title: "HEALTHY EATING", path: "/healthy-eating" },
  { title: "PERSONAL CARE", path: "/personal-care" },
  { title: "WEIGHT LOSS TIPS", path: "/weight-loss-tips" },
  { title: "WORKOUT ROUTINES", path: "/workout-routines" },
  { title: "PRIVACY POLICY", path: "/privacy-policy" },
  { title: "TERMS", path: "/terms-and-conditions" },
  { title: "CONTACT", path: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-fuchsia-700 sticky top-0 z-50">
      <div className="container">
        <div className="h-16 flex items-center justify-between lg:justify-center">
          <Link href="/" className="shrink-0">
            <Image src={logo} height={50} width={250} alt="" />
          </Link>
          <Drawer />
        </div>
        <div className="hidden lg:flex lg:justify-center">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Nav = ({ handler }: { handler?: () => void }) => {
  const pathname = usePathname();

  return (
    <nav className="p-4 lg:p-0 lg:pb-4 flex flex-col lg:flex-row items-start lg:items-center gap-y-4 lg:gap-y-0 text-xs font-semibold lg:gap-x-8 whitespace-nowrap text-neutral-50">
      {links.map(({ title, path }) => (
        <Link key={path} onClick={() => handler && handler()} href={path} className="relative">
          {title}
          <span
            className={`absolute border-b w-full left-0 bottom-0 duration-300 ${
              path === pathname ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

const Drawer = () => {
  const [show, setShow] = useState(false);

  const handler = useCallback(() => setShow((prev) => !prev), []);

  useEffect(() => {
    const change = () => window.innerWidth >= 1024 && setShow(false);
    window.addEventListener("resize", change);
    return () => {
      window.removeEventListener("resize", change);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button className="text-2xl text-neutral-50" onClick={handler}>
        <RxHamburgerMenu />
      </button>
      {show && (
        <div
          onClick={handler}
          className="fixed inset-0 bg-neutral-900/70 flex justify-end backdrop-blur"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-r from-purple-700 to-fuchsia-700"
          >
            <div className="flex items-center gap-x-10 h-16 px-4">
              <Link href="/" className="shrink-0" onClick={handler}>
                <Image src={logo} height={50} width={250} alt="" />
              </Link>
              <button onClick={handler} className="text-neutral-50">
                <AiOutlineClose />
              </button>
            </div>
            <Nav handler={handler} />
          </div>
        </div>
      )}
    </div>
  );
};
