import Link from "next/link";

const About = () => {
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
      <div  className="p-2 flex flex-col items-center justify-center ">
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
      </div>
    </>
  );
};

export default About;