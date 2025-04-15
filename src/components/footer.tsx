"use client";

import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { useState } from "react";

const links = [
  { title: "Home", path: "/" },
  { title: "Healthy Eating", path: "/healthy-eating" },
  { title: "Personal Care", path: "/personal-care" },
  { title: "Weight Loss Tips", path: "/weight-loss-tips" },
  { title: "Workout Routines", path: "/workout-routines" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms", path: "/terms-and-conditions" },
  { title: "Contact", path: "/contact" },
];

const validator = z.object({
  email: z.string().trim().toLowerCase().min(1, { message: "Email is required" }).email(),
});

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-fuchsia-700 text-neutral-50">
      <div className="container grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-10 py-20 place-items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="" height={70} width={300} />
          </Link>
          <p className="mt-2 text-center">© TheSuperMommy {new Date().getFullYear()}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 font-semibold">
          {links.map(({ title, path }) => (
            <Link key={path} href={path} className="relative w-fit">
              {title}
              <span
                className={`absolute border-b w-full left-0 bottom-0 duration-300 ${
                  path === pathname ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </div>
        <form
          className="w-full max-w-[350px] text-sm grid grid-cols-1 place-items-center lg:place-items-start text-center lg:text-start gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (isLoading) return;
            const data = validator.safeParse({ email });
            if (!data.success) {
              return toast.error(data.error.errors[0].message);
            }
            setIsLoading(true);
            const id = toast.loading("Please wait");
            setTimeout(() => {
              setEmail("");
              setIsLoading(false);
              toast.update(id, {
                render: "Successfully subscribed",
                autoClose: 3000,
                isLoading: false,
                type: "success",
              });
            }, 1500);
          }}
        >
          <p className="text-xl font-bold">Subscribe newsletter</p>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
            placeholder="Email address"
            type="email"
            className="h-10 px-4 outline-none border bg-transparent disabled:border-neutral-500 w-full placeholder:text-neutral-300"
          />
          <p className="text-neutral-300">
            By submitting you’re agree to receives newsletters on your email address
          </p>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-neutral-50 text-neutral-950 py-2 font-medium disabled:bg-neutral-500 px-5 w-28"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
