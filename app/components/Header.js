import React from "react";
import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <p className="text-2xl font-semibold text-orange-500">
        <Link href="/"> Logo </Link>
      </p>

      <Nav />
    </header>
  );
}

export default Header;
