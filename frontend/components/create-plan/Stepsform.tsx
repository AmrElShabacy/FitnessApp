"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GOAL } from "../../lib/models/enums";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { saveDetailsLink } from "@/lib/constants/endpoints";
import { useAppSelector } from "@/redux/store";

const formSchema = z.object({
  Age: z.number(),
  Weight: z.number(),
  Height: z.number(),
  Goal: z.enum([GOAL.GAIN, GOAL.LOSE, GOAL.SHRED]),
  BodyType: z.enum(["athelete", "hero", "bodyBuilder"]),
  FollowedDiet: z.enum(["vegeterian", "keto", "vegan", "none"]),
  WaterGlassesPerDay: z.string(),
});
const bodytypeArr = ["athelete", "hero", "bodyBuilder"];
const goalArr = ["gain", "lose", "shred"];
const FollowedDietArr = ["vegeterian", "keto", "vegan", "none"];
const Stepsform = (props: { stepNumber: number; incrementStep: Function }) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.values);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Age: undefined,
      Weight: undefined,
      Goal: undefined,
      BodyType: undefined,
      FollowedDiet: undefined,
      WaterGlassesPerDay: undefined,
    },
  });
  async function onSubmit(/*values: z.infer<typeof formSchema>*/) {
    const values = form.getValues();
    const personalDetails = {
      Username: user.username,
      Age: values.Age,
      Weight: values.Weight,
      Height: values.Height,
      Goal: goalArr.findIndex(
        (item) => item.toLowerCase() === values.Goal.toLowerCase()
      ),
      BodyType: bodytypeArr.findIndex(
        (item) => item.toLowerCase() === values.BodyType.toLowerCase()
      ),
      FollowedDiet: FollowedDietArr.findIndex(
        (item) => item.toLowerCase() === values.FollowedDiet.toLowerCase()
      ),
      WaterGlassesPerDay: values.WaterGlassesPerDay,
    };

    console.log(personalDetails);
    const res = await fetch(saveDetailsLink, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(personalDetails),
    });
    if (!res.ok) alert(await res.text());

    router.push("/dashboard");
  }

  function handleNextButton(event: any) {
    event.preventDefault();
    props.incrementStep();
  }
  return (
    <div
      className="
  flex flex-col items-center justify-start
  w-[50%]
  h-[100%]
  py-10
  "
    >
      <div
        className="
        flex flex-col items-start justify-start
        w-full
         border-secondary-primary
        border-b-2
        pb-5
        "
      >
        <h1
          className="
        text-base-primary
        text-subheading
            "
        >
          {`Step ${props.stepNumber + 1} / 3`}
        </h1>
      </div>
      <div
        className="
            flex flex-col items-start justify-start
            w-full
            mt-10
            "
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4
        w-[100%]"
          >
            {props.stepNumber === 0 ? (
              <>
                <FormField
                  control={form.control}
                  name="Age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your age?</FormLabel>
                      <FormControl>
                        <Input placeholder="21" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your weight (KG)?</FormLabel>
                      <FormControl>
                        <Input placeholder="71" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your height (CM)?</FormLabel>
                      <FormControl>
                        <Input placeholder="164" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : null}
            {props.stepNumber === 1 ? (
              <>
                <FormField
                  control={form.control}
                  name="Goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your goal?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="gain"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Gain Muscle Mass
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="lose"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Lose Weight
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="shred"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Get Shredded
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="BodyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's the body type you want?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="athelete"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Athelete
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="hero"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Hero</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="bodyBuilder"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Body Builder
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : null}
            {props.stepNumber === 2 ? (
              <>
                <FormField
                  control={form.control}
                  name="FollowedDiet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you follow any of these diets?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="vegeterian"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Vegeterian
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="vegan"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Vegan</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="keto"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Keto</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="none"
                                className="text-secondary-primary"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">None</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="WaterGlassesPerDay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How many glasses of water do you drink per day?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="21" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : null}
            <div
              className="
                flex flex-row items-end justify-end
                w-full
                "
            >
              {props.stepNumber < 2 ? (
                <Button
                  className="w-[40%] bg-secondary-primary"
                  onClick={handleNextButton}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-[40%] bg-secondary-primary"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Stepsform;
