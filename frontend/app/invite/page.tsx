"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

const page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/dashboard");
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
          <h3 className="text-2xl">
            Write your friend's email to invite them to ShapeShift!
          </h3>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Friend Email</FormLabel>
                <FormControl>
                  <Input placeholder="email address" {...field} />
                </FormControl>
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
            Invite
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default page;
