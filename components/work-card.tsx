import { AnimatedGradientText } from './animated-gradient-text'

interface ProjectCardProps {
  companyDescription: string
  companyPosition: string
  description: string[]
  time: string
}

export default function WorkCard({
  companyDescription,
  companyPosition,
  description,
  time
}: ProjectCardProps): React.ReactElement {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <AnimatedGradientText
        className="font-caveat font-medium text-indigo-500 mb-1 sm:mb-0 text-2xl"
        text={companyDescription}
      />

      <span className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 dark:after:bg-pink-600 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute -left-[60px] translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-[150px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          {time}
        </time>
        <div className="text-xl font-bold text-slate-900 dark:text-slate-300">{companyPosition}</div>
      </span>

      <ul className="text-slate-500">
        {description.map((item, index) => (
          <li key={index} className="text-slate-900 dark:text-slate-400 flex">
            <span className="mr-2">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
