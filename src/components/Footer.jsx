import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full border-solid border-0 border-t-2 border-b-0 dark:border-t-1 dark:border-b-0 border-dark font-medium text-lg bg-light dark:bg-dark text-dark dark:text-light dark:border-light sm:text-base'>
        <div className='px-32 py-12 flex items-center justify-between lg:flex-col lg:px-8 lg:gap-6 lg:py-8 md:px-6'>
            <div className='flex flex-col items-start gap-2'>
              <span className='font-semibold'>{currentYear} © All Rights Reserved.</span>
              <span className='text-sm text-dark/75 dark:text-light/75'>Built with Next.js, React & Tailwind CSS</span>
            </div>
            
            <nav className='flex gap-8 lg:flex-col lg:gap-4 lg:text-center'>
              <Link href="/" className='hover:text-primary dark:hover:text-primaryDark transition-colors'>Home</Link>
              <Link href="/about" className='hover:text-primary dark:hover:text-primaryDark transition-colors'>About</Link>
              <Link href="/projects" className='hover:text-primary dark:hover:text-primaryDark transition-colors'>Projects</Link>
              <Link href="/blogs" className='hover:text-primary dark:hover:text-primaryDark transition-colors'>Blogs</Link>
            </nav>

            <div className='flex flex-col items-end lg:items-center gap-2'>
              <Link href="/contact" className='hover:text-primary dark:hover:text-primaryDark transition-colors font-semibold'>Contact Me</Link>
              <span className='text-sm text-dark/75 dark:text-light/75'>Let's build something amazing together</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer;