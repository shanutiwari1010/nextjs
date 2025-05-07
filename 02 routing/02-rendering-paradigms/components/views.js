import React from "react";

const Views = async () => {

  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>10K+ Views</div>;
};

export default Views;
