"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "@/../public/undraw_page_not_found_re_e9o6.svg";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="text-center px-10 flex flex-col gap-12 items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
        <Image
          src={NotFoundImage}
          alt="Page not found"
          draggable={false}
          className=""
        />
        <div className="space-y-4 xl:space-y-8">
          <h2 className="font-bold text-3xl xl:text-5xl">Oops!</h2>
          <p>
            The page you're looking for is not found.{" "}
            <button onClick={() => router.back()} className="text-primary">
              Go back
            </button>
          </p>
        </div>
      </main>
    </>
  );
}
