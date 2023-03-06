import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Link href="#">🏠</Link>
      <Link href="#">About</Link>
      <Link href="#">Blog</Link>
      <Link href="#">Portfolio</Link>
      <Link href="#">Get in touch</Link>
    </div>
  )
}

export default Navbar
