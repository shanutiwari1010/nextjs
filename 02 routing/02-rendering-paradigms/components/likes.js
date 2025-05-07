"use client";

import React,{useState} from "react";

const Likes = () => {
  // await new Promise((resolve) => setTimeout(resolve, 6000));
const [count, setCount] = useState(0);
  // if (typeof localStorage !== "undefined") {
  //   console.log(localStorage);
  // }
  console.log(count)
  return (
    <div onClick={() => setCount(count+1)}> count: {count}</div>
  );
};

export default Likes;
