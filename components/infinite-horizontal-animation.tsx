'use client'
import { useEffect, useRef } from 'react'

import AllSvgs from './svgs/AllSvgs'

interface InfiniteHorizontalAnimationProps {
  variant?: 'default' | 'reverse'
  svgs: SvgProps[]
}

interface SvgProps {
  svg: keyof typeof AllSvgs
  title?: string
}

const animate = {
  default: 'animate-infinite-scroll',
  reverse: 'animate-infinite-scroll-reverse'
}

export function InfiniteHorizontalAnimation({
  variant = 'default',
  svgs = []
}: InfiniteHorizontalAnimationProps): JSX.Element {
  const logosRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (logosRef.current !== null) {
      const ul = logosRef.current

      ul.insertAdjacentHTML('afterend', ul.outerHTML.trim())

      const nextSibling = ul.nextSibling as HTMLElement | null

      if (nextSibling !== null) {
        const typeAnimate = animate[variant]

        ul.classList.add(typeAnimate)
        nextSibling.classList.add(typeAnimate)
        nextSibling.setAttribute('aria-hidden', 'true')
      }
    }
  }, [variant])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div className="text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [-webkit-mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul
            ref={logosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
          >
            {svgs.map(({ svg, title }, idx) => (
              <li key={idx} className="flex group justify-center items-center gap-2">
                {AllSvgs[svg]()}
                {title !== undefined && <span className="text-md font-bold">{title}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
