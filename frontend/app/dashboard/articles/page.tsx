"use client";
import Articlecard from "@/components/articles/Articlecard";
import React from "react";
import { useFetch } from "@/lib/helpers/hooks/useFetch";
import { getArticlesLink } from "@/lib/constants/endpoints";
import { Article } from "@/lib/models/article";
const page = () => {
  const { data, isLoading, error } = useFetch(getArticlesLink);

  function render() {
    if (isLoading) return <h1>Loading....</h1>;
    if (error) return <h1>{error}</h1>;
    if (!data) return <h1>No Articles yet</h1>;
    return (
      <div
        className="
        flex
        flex-row
        justify-stretch
        items-center
        w-full
        py-5
        px-5
        gap-5
        flex-wrap
        "
      >
        {data.map((item: Article) => (
          <Articlecard
            key={item.id}
            title={item.title}
            author={item.author}
            dateOfPublish={item.date}
            blog={item.body}
            id={item.id}
            subject={item.subject}
          />
        ))}
      </div>
    );
  }
  return (
    <section className="flex flex-col h-screen py-20 px-10 w-full">
      {render()}
    </section>
  );
};

export default page;
