import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="my-8 mx-6 flex items-center justify-around text-center">
      <Link href="/about" className="w-2/12">
        About
      </Link>
      <Link href="/blog" className="w-2/12">
        Blog
      </Link>
      <Link href="/" className="text-5xl w-2/12">
        ★
      </Link>
      <Link href="/portfolio" className="w-2/12">
        Portfolio
      </Link>
      <Link href="/contact" className="w-2/12">
        Reach out
      </Link>
    </div>
  );
};

export default Navbar;
