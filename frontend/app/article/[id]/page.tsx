"use client";
import Articlepage from "@/components/Articlepage";
import isAuth from "@/components/auth/isAutth";
import React from "react";

const page = () => {
  return (
    <>
      <Articlepage />
    </>
  );
};

export default isAuth(page);
