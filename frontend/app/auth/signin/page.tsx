"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { logIn } from "@/redux/auth/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loginLink } from "@/lib/constants/endpoints";
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long",
  }),
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
      password: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch(loginLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) alert(await response.text());
    else {
      const { token } = await response.json();
      dispatch(
        logIn({
          id: uuidv4(),
          username: values.username,
          password: values.password,
          email: "",
          token,
        })
      );
      router.push("/dashboard");
    }
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
          <h3 className="text-2xl">Sign in to access your account</h3>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <p>
            <Link
              href="/auth/resetpassword"
              className="cursor-pointer underline text-secondary-primary"
            >
              Forgot Password?
            </Link>
          </p>
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
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="cursor-pointer underline text-secondary-primary"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </section>
  );
};

export default page;
