'use client'

import { Mail } from 'lucide-react'
import Link from 'next/link'

import Logo from './svgs/logo'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

export default function Header(): React.ReactElement {
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id)
    const offset = 0

    if (section && window) {
      const offsetPosition = section.offsetTop - offset

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  return (
    <header className="w-full h-auto font-poppins left-0 right-0 supports-backdrop-blur:bg-transparent sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="w-full h-[80px] container flex justify-between items-center ">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center justify-center gap-[30px] px-[10px] dark:text-gray-300">
          <Button
            className="text-black dark:text-gray-300 font-light text-[18px] text-center bg-transparent hover:bg-transparent"
            onClick={() => {
              scrollToSection('abilities')
            }}
          >
            Habilidades
          </Button>
          <Button
            className="text-black dark:text-gray-300 font-light text-[18px] text-center bg-transparent hover:bg-transparent"
            onClick={() => {
              scrollToSection('projects')
            }}
          >
            Mis proyectos
          </Button>
          <Button
            className="text-black dark:text-gray-300 font-light text-[18px] text-center bg-transparent hover:bg-transparent"
            onClick={() => {
              scrollToSection('contact')
            }}
          >
            Contantos
          </Button>
        </div>
        <div className="flex justify-center items-center px-3 gap-5">
          <ModeToggle />
          <Button
            onClick={() => {
              scrollToSection('contact')
            }}
          >
            <Mail className="mr-2 h-4 w-4" /> Contratame
          </Button>
        </div>
      </nav>
    </header>
  )
}
