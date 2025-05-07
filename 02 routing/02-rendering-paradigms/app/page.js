import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav>
        <ul className="flex bg-gray-800 justify-evenly h-20 items-center">
          <li>
            <Link href="/" className="bg-cyan-900 p-3 rounded-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="bg-cyan-900 p-3 rounded-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="bg-cyan-900 p-3 rounded-lg">
              Services
            </Link>
          </li><li>
            <Link href="/blogs" className="bg-cyan-900 p-3 rounded-lg">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-2 flex flex-col items-center justify-center  mt-4" >
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;