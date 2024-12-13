"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const page = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen
  bg-bg-primary
    "
    >
      <div
        className="flex flex-col items-center justify-center
      w-full
      py-5
      sm:py-10
      sm:px-5
          "
      >
        <Image src="/assets/logo.png" width={500} height={500} alt="logo" />
        <h2 className="text-white text-subheading max-w-[500px] text-justify mt-24">
          A verification email was sent to the given address. Please use it to
          verify that you own this email address. You won't be able to use your
          account before you verify your email.
        </h2>
        <button
          className="bg-secondary-primary py-4 px-8 my-12 text-white 
        rounded-lg
        text-button
        "
        >
          <Link href="/auth/signin">I verified my email address</Link>
        </button>
      </div>
    </section>
  );
};

export default page;
