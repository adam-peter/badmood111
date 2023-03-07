import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between my-8 mx-6 items-center">
      <Link href="/about" className='h-max w-20'>About</Link>
      <Link href="/blog" className='h-max w-20'>Blog</Link>
      <Link href="/" className='text-5xl'>★</Link>
      <Link href="/portfolio" className='h-max w-20'>Portfolio</Link>
      <Link href="/contact" className='h-max w-20'>Reach out</Link>
    </div>
  )
}

export default Navbar
