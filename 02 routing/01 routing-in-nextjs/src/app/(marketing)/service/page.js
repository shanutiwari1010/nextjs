import React from "react";
import Link from "next/link";
const Sections = () => {
  return (
    <div>
      <h1>Sections Page</h1>
      <Link href= "/service/app-dev">App Development</Link>
      <Link href= "/service/web-dev">Web Development</Link>
      <Link href= "/service/seo-services">SEO Services</Link>
    </div>
  );
};

export default Sections;
