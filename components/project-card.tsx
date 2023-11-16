import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight
  // GitBranch
} from 'lucide-react'

import { SpotlightCard } from './spotlight'
import { Badge } from './ui/badge'
// import { Button } from './ui/button'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  webUrl: string
}

export default function ProjectCard({ title, description, tags, image, webUrl }: ProjectCardProps): React.ReactElement {
  return (
    <SpotlightCard>
      <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
          <div className="absolute -inset-2 bg-purple-700 top-20 rounded-full blur-[90px]" />
        </div>
        <div className="flex flex-col h-full relative">
          {/* <Button className="absolute right-1 top-1 rounded-sm" size={'icon'} variant={'secondary'}>
            <GitBranch />
          </Button> */}
          <Image
            priority
            alt="d8e681698d3baa716d17cdd7507a83e8"
            className="w-full h-[250px] aspect-auto rounded-sm"
            height={0}
            sizes="100"
            src={image}
            width={0}
          />
          <div className="grow mt-3">
            <h2 className="text-xl dark:text-white text-dark font-bold mb-3">{title}</h2>
            <p className="text-slate-500 mb-2">{description}</p>
          </div>
          <div className="flex items-center gap-2 my-3 mb-7">
            {tags.map((tag, idx) => (
              <Badge key={idx} className="hover:bg-secondary" variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            className="inline-flex gap-1 group justify-center items-center whitespace-nowrap rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href={webUrl}
          >
            <span>Visitar sitio web</span>
            <ArrowUpRight className="transition-all duration-300 group-hover:-translate-y-[2px]" size={17} />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  )
}
