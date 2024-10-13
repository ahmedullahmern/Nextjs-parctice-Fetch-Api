'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Header() {
    const pathname = usePathname()

    return (
        <nav className='flex justify-center  items-center bg-indigo-500 gap-10 text-white h-[60px]'>
            <Link className={`link ${pathname === '/' ? 'active underline text-black' : ''}`} href="/">
                Home
            </Link>
            <Link
                className={`link ${pathname === '/about' ? 'active underline text-black' : ''}`} href="/about">
                About
            </Link>
            <Link
                className={`link ${pathname === '/postdata' ? 'active underline text-black' : ''}`} href="/postdata">
                Post
            </Link>
            <Link
                className={`link ${pathname === '/contact' ? 'active underline text-black' : ''}`} href="/contact">
                Contacts Us
            </Link>
            <Link
                className={`link ${pathname === '/dashboard' ? 'active underline text-black' : ''}`} href="/dashboard">
                Dashboards
            </Link>
            <Link
                className={`link ${pathname === '/signup' ? 'active underline text-black' : ''}`} href="/signup">
                Signup
            </Link>
            <Link
                className={`link ${pathname === '/login' ? 'active underline text-black' : ''}`} href="/login">
                Login
            </Link>
        </nav>
    )
}

export default Header