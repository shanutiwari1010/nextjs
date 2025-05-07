import { notFound } from "next/navigation";

export default async function Blog({ params }) {
    console.log(await params)
    const { blogID } = await params;
    if (/^[A-Za-z]+$/.test(blogID)) {
      notFound();
    }
    
    return <div>Blog {blogID}</div>;
  }