import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { link } from 'fs'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'

export default function Navbar() {
    const session={};
  return (
    <nav className="flexBetweent navbar">
    <div className="flex-1 flexStart gap-10">
        <Link href="/">
            <Image
            src="/logo-3.png"
            width={115}
            height={43}
            alt="YuriSoft"
            />
        </Link>
        <ul className="xl:flex hidden text-small gap-7"> {NavLinks.map((link) => (
            <><Link href={link.href} key={link.key}>
                {link.text}

            </Link><div className="flexCenter gap-4">
                    {session ? (
                        <>
                            UserPhoto
                            <Link href="/create-project">
                                Share Work
                            </Link>
                        </>
                    ) : (
                        <AuthProviders />
                    )}
                </div></>
        ))}
        </ul>
    </div>
    </nav>
  )
}
