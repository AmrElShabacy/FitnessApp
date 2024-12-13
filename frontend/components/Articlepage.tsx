import React from "react";
import Article from "./articles/Article";

const Articlepage = () => {
  return (
    <section
      className="
            flex
            flex-col
            w-full
            h-full
            
            px-80
            py-8
            
            md:px-8
            md:py-12
        "
    >
      <Article />
    </section>
  );
};

export default Articlepage;
