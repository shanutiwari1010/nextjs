import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Welcome Home</h1>
    <div>
    <Link href= "/about">About     |    </Link>
    <Link href= "/service">Service</Link>s
    <Link href= "/blogs">Blogs</Link>s
    </div>
    
    </>
     );
}
