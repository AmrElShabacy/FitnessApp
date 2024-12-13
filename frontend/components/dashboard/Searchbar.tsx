import React from "react";

const Searchbar = () => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded
        focus:outline-none focus:bg-white
      "
    />
  );
};

export default Searchbar;
