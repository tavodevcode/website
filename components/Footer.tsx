'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import Logo from './svgs/logo'
import { Linkedin } from './svgs/linkedin'
import { GitHub } from './svgs/github'
import { Instagram } from './svgs/instagram'

// import { SvgGitHub, SvgInstagram, SvgLinkedin } from '@/components'

export default function Footer(): React.ReactElement {
  const [currentYear, setCurrentYear] = useState(0)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <div className="w-full flex flex-col container justify-center items-center mt-[90px]">
      <div className="w-full h-full flex justify-between px-5 items-center bg-[#ffffff01]">
        <div className="w-1/4 h-full">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="w-1/4 h-full flex justify-end items-start">
          <div className="flex justify-center items-center gap-2">
            <Linkedin
              className="cursor-pointer fill-black dark:fill-white"
              height={35}
              viewBox="0 0 24 24"
              width={35}
            />
            <GitHub
              className="cursor-pointer fill-black dark:fill-white"
              height={26}
              viewBox="0 0 438 438"
              width={26}
            />
            <Instagram
              className="ml-1 cursor-pointer fill-black dark:fill-white"
              height={26}
              viewBox="0 0 438 438"
              width={26}
            />
          </div>
        </div>
      </div>
      <div className="w-full py-10 flex justify-center items-center bottom-0">
        <h1 className="font-[500] text-[16px] ">
          &copy; <span>{currentYear} </span>| Diseñado por tedev | Todos los derechos reservados.
        </h1>
      </div>
    </div>
  )
}
