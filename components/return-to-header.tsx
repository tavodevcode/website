'use client'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from './ui/button'

export default function ReturnToHeader(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll(): void {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleReturnHeader = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button
      className={`transition-opacity duration-300 ${
        !scrolled && 'opacity-0 hidden'
      } fixed bottom-[5%] right-[3%] rounded-full z-20`}
      size={'icon'}
      onClick={handleReturnHeader}
    >
      <ArrowUp size={20} />
    </Button>
  )
}
