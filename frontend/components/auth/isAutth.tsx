"use client";

import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const user = useAppSelector((state) => state.auth.values);
    useEffect(() => {
      if (user.username === "") {
        return redirect("/");
      }
    }, []);
    if (user.username !== "") {
      return <Component {...props} />;
    }
    return null;
  };
}
