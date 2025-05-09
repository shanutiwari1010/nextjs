import Link from "next/link";

const Services = () => {
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
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
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
      <div >
        <h1 className="flex flex-col items-center justify-start text-lg font-semibold p-2">Our Services</h1>
        <ul className=" list-disc p-2 gap-4 flex flex-col items-center justify-center">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;