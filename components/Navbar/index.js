"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className='fixed top-0 left-0 w-full py-8 z-50'>
      <div className='container flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-2'>
          <div className='h-10 w-10 rounded-full bg-main flex items-center justify-center'>
            <p className='font-semibold text-white'>M</p>
          </div>
          <p className='font-semibold text-main'>Mulih</p>
        </Link>
        <nav className='flex gap-12'>
          <Link href='/' className=''>
            Home
          </Link>
          <Link href='/' className=''>
            Property
          </Link>
          <Link href='/' className=''>
            About
          </Link>
          <Link href='/' className=''>
            Service
          </Link>
          <Link href='/' className=''>
            Contact
          </Link>
        </nav>
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <button className='px-10 py-4 text-main'>Sign in</button>
          </Link>
          <Link href='/'>
            <button className='px-10 py-4 bg-main text-white'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
