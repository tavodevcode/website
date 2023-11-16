import { AnimatedGradientText } from './animated-gradient-text'

export function SlidingTitleAnimation(): React.ReactNode {
  return (
    <h1
      // className="mt-5 font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-50% to-pink-500  dark:bg-gradient-to-r dark:from-slate-200/60 dark:to-50% dark:to-slate-200"
      className="w-[675px] text-[80px] mt-[45px] font-extrabold uppercase text-slate-800 dark:text-white"
      //  className="mt-5 font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-50% to-pink-500  dark:bg-gradient-to-r dark:from-slate-200/60 dark:to-50% dark:to-slate-200"
    >
      Hola bienvenido a mi sitio web! Soy{' '}
      <span className="text-indigo-500 inline-flex flex-col h-[calc(80px*theme(lineHeight.tight))] md:h-[calc(80px*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
          <li>
            <AnimatedGradientText text="Gustavo" />
          </li>
          <li>
            <AnimatedGradientText text="Hernandez" />
          </li>
          <li>
            <AnimatedGradientText text="Hidalgo" />
          </li>
          {/* <li>Crypto</li> */}
          {/* <li>eCommerce</li> */}
          <li aria-hidden="true">
            <AnimatedGradientText text="Gustavo" />
          </li>
        </ul>
      </span>
    </h1>
  )
}
