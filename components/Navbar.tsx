import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';



const Navbar = () => {
    const session = null;


    return (
        <nav className='flex-between navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={115}
                        height={40}
                        alt="flexibble"
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                        Userfoto
                        <Link href="/create-project">
                        </Link>
                        shared work
                    </>
                ) : (
                    <AuthProviders />
                )}
                
            </div>
        </nav>
    )
}

export default Navbar