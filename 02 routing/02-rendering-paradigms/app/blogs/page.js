import Comments from "@/components/comments";
import Likes from "@/components/likes";
import Views from "@/components/views";
import Link from "next/link";
import { Suspense } from "react"; 

export default async function Blogs() {
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
      <h1>All Blogs</h1>
      <p>
        <li>
          <Link href="/blogs/1" className="nav-link active">
            Blogs 1
          </Link>
        </li>
      </p>
      <p>
        <Link href="/blogs/2" className="nav-link active">
          Blogs 2
        </Link>
      </p>
      <p>
        <Link href="/blogs/3" className="nav-link active">
          Blogs 3
        </Link>
      </p>
      <div className="flex flex-col justify-center items-center gap-4">
        <Likes />
      </div>
    </>
  );
}
