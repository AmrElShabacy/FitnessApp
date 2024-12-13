"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import Image from "next/image";
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  name: z.string(),
  textMess: z.string(),
});
const page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      textMess: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/dashboard");
  }
  return (
    <section
      className="
        min-h-screen
        bg-bg-primary
        flex
        flex-row
        justify-center
        items-center
        gap-5
        sm:flex-col


    "
    >
      <div
        className="w[50%]
            flex
            flex-col
            justify-center
            items-center
            sm:w-full
            sm:py-0
            sm:px-5
        "
      >
        <Image
          src="/assets/logo.png"
          alt="404"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div
        className="
            flex
            flex-col
            justify-center
            items-center
            gap-5
            w-[50%]
            sm:w-full
            
            
            "
      >
        <div
          className="
            flex
            flex-col
            justify-start
            items-start
            px-10
            w-full
            gap-5
            sm:px-5
            "
        >
          <h1
            className="
            text-[2rem]
            font-bold
            text-center
            text-base-primary
            "
          >
            Ne
            <span
              className="
            text-secondary-primary
              "
            >
              e
            </span>
            d Supp
            <span
              className="
            text-secondary-primary
              "
            >
              o
            </span>
            rt?
          </h1>
          <p
            className="
            text-base-primary
            "
          >
            We are here to help you.{" "}
            <span
              className="font-bold
            text-secondary-primary
              "
            >
              Please
            </span>{" "}
            fill out the form below and we will get back to you as soon as
            {"  "}
            <span
              className="font-bold 
            text-secondary-primary
              "
            >
              possible
            </span>
            .
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4
        w-[90%]
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="your name" {...field} />
                  </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="textMess"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please Enter your Question Here
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
          </form>
        </Form>
      </div>
    </section>
  );
};

export default page;
