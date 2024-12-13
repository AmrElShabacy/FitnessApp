"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerLink } from "@/lib/constants/endpoints";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters long",
  }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});
const page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch(registerLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) alert(await response.text());
    router.push("/auth/email-verify");
  }
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
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4
        w-[40%]
        px-10
        py-10
        text-base-primary
        bg-primary-light
        shadow-2xl

        rounded-3xl
        sm:w-[90%]
        sm:px-5
        "
        >
          <h3 className="text-2xl">Create your account</h3>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription className="text-secondary-primary">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email address" {...field} />
                </FormControl>
                <FormDescription className="text-secondary-primary">
                  This is your Email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormDescription className="text-secondary-primary">
                  This is your password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-secondary-primary
            text-base-primary
            px-10
            py-2
            rounded-full
            font-bold
            !mt-6
            "
          >
            Submit
          </Button>
          <p>
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="cursor-pointer underline text-secondary-primary"
            >
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </section>
  );
};

export default page;
