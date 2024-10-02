import Link from "next/link";

const Nav = () => {
  return (
    <nav className="mb-20 mt-10">
      <ul className="flex justify-between">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
