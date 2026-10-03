import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li className="mr-auto">
          <Link href="/" className="hover:underline ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/list" className="hover:underline">
            List
          </Link>
        </li>
        <li>
          <Link href="/add" className="hover:underline">
            Add
          </Link>
        </li>
        <li>
          <Link href="/update" className="hover:underline">
            Update
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
