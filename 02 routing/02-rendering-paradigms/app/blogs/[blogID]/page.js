import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 5;

// export async function generateStaticParams() {
//     const response = await fetch ("https://jsonplaceholder.typicode.com/todos",{})
//     const data = await response.json()
//     return data.map(({id})=>({blogID: `${id}`}))
// //   return [
// //     {
// //       blogID: "1",
// //     },
// //     {
// //         blogID: "2",
// //     },
// //     {
// //         blogID: "3",
// //     },
// //   ];
// }
export default async function Blog({ params }) {
  console.log(await params, "6789");
  const { blogID } = await params;

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  console.log(data, "data");
  if (/^[A-Za-z]+$/.test(blogID)) {
    notFound();
  }

  return (
    <>
      <nav>
        <ul className="flex bg-gray-800 justify-evenly h-20 items-center">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link active">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>Blog {blogID}</div>
      <h1>Date: {new Date().toLocaleString()}</h1>
    </>
  );
}
