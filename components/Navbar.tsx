import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center text-center h-20">
        <Link
          href="/about"
          className="w-1/5 py-12 text-xl hover:bg-myWhite hover:text-myBlack"
        >
          About
        </Link>
        <Link href="/blog" className="w-1/5 text-xl">
          Blog
        </Link>
        <Link href="/" className="w-1/5 text-5xl">
          ★
        </Link>
        <Link href="/portfolio" className="w-1/5 text-xl">
          Portfolio
        </Link>
        <Link href="/contact" className="w-1/5 text-xl">
          Reach out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
