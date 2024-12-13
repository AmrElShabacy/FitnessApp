"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useFetch } from "@/lib/helpers/hooks/useFetch";
import { getArticlesLink } from "@/lib/constants/endpoints";
const Article = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`${getArticlesLink}/${id}`);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div
      className="flex flex-col 
      px-10
    py-10 w-full  bg-gray-100"
    >
      <div
        className="
        flex
        flex-col
        justify-center
        items-center
        w-full
        
        gap-3
        "
      >
        <h1
          className="
            text-[40px] font-bold text-center
           
            "
        >
          {data?.title}
        </h1>
        <div
          className="
                flex
                flex-row
                justify-center
                items-center
                w-full
                
                "
        >
          <Image
            src="/assets/articleCard.jpg"
            alt="blog"
            width={500}
            height={500}
          />
        </div>
        <div
          className="
            flex
            flex-col
            justify-start
            items-start
            text-
            pt-5
            w-full
            text-justify
            "
        >
          <p>{data?.body}</p>
        </div>
        <div
          className="
                    flex
                    flex-row
                    justify-between
                    items-center
                    w-full
                    
                    "
        >
          <h2
            className="
                        text-[17px]
                        font-bold
                        "
          >
            <span
              className="
                            text-secondary-primary
                            "
            >
              By:
            </span>{" "}
            {data?.author}
            <br />
            <span>
              <span
                className="
                                text-secondary-primary
                "
              >
                Subject:
              </span>{" "}
              {data?.subject}
            </span>
          </h2>
          <span>{data?.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
