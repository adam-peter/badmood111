import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">🏠</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Get in touch</Link>
    </div>
  )
}

export default Navbar
