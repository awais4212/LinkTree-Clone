"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  // ✅ Use pathname instead of window
  const showNavbar = ["/", "/generate"].includes(pathname)

  if (!showNavbar) return null

  return (
    <nav className='bg-white flex w-[80vw] fixed top-10 right-[10vw] justify-around items-center rounded-full p-3 px-2'>
      
      <div className='flex gap-20'>
        
        <Link href="/">
          <div className="logo">
            <img className='h-8' src="/logo.svg" alt="logo" />
          </div>
        </Link>

        <ul className='flex justify-center items-center text-black gap-8'>
          <Link href="/"><li>Product</li></Link>
          <Link href="/"><li>Template</li></Link>
          <Link href="/"><li>Marketplace</li></Link>
          <Link href="/"><li>Learn</li></Link>
          <Link href="/"><li>Pricing</li></Link>
        </ul>

      </div>

      <div className='button flex gap-4'>
        <button className='rounded-2xl p-5 px-7 bg-[#eff0ec] text-black text-lg font-bold'>
          Log in
        </button>
        <button className='rounded-full p-5 bg-[#1e2330] text-white text-lg font-bold'>
          Sign up free
        </button>
      </div>

    </nav>
  )
}

export default Navbar