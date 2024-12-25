import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="my-6 text-xl font-semibold cursor-pointer">
      <ul className="flex gap-4">
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/name">Name</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
