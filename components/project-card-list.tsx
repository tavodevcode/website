import Link from 'next/link'
import Image from 'next/image'

import { AnimatedGradientText } from './animated-gradient-text'
import ProjectCard from './project-card'
import Spotlight from './spotlight'
import { Button } from './ui/button'

export default function ProjectCardList(): React.ReactElement {
  return (
    <section
      className="relative w-full h-auto container flex flex-col justify-center items-center font-poppins mt-[80px] gap-5"
      id="projects"
    >
      <Image
        priority
        alt="image-profile"
        className="absolute -left-[200px] -top-[150px] -rotate-[25deg] z-30"
        height="300"
        src={'/ui/image-from-rawpixel-id-12180662-png.png'}
        width="300"
      />

      {/* <div className="-z-10 absolute -left-[90%] -top-[500px] w-[1550px] h-[1550px] [background:radial-gradient(closest-side,#ff04e2a3,transparent)]" /> */}

      <AnimatedGradientText className="text-6xl mb-11" text="Mis proyectos" />

      <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        <ProjectCard
          // key={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor laborum optio sunt sint delectus soluta. Molestiae quia aperiam quos est veniam nostrum, laboriosam perferendis quis, illum, exercitationem repellat. Esse."
          image="/2b2ad9181cee492c7dea68ffbd337979.jpg"
          tags={['React', 'Nextjs', 'TailwindCSS']}
          title="Hola mundo"
          webUrl="#"
        />

        <ProjectCard
          // key={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor laborum optio sunt sint delectus soluta. Molestiae quia aperiam quos est veniam nostrum, laboriosam perferendis quis, illum, exercitationem repellat. Esse."
          image="/16cffbde57f434cfb872f817c6fbd41b.jpg"
          tags={['React', 'Nextjs', 'TailwindCSS']}
          title="Hola mundo"
          webUrl="#"
        />

        <ProjectCard
          // key={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor laborum optio sunt sint delectus soluta. Molestiae quia aperiam quos est veniam nostrum, laboriosam perferendis quis, illum, exercitationem repellat. Esse."
          image="/610ea858ae29f60961ba64c46c5b5048.jpg"
          tags={['React', 'Nextjs', 'TailwindCSS']}
          title="Hola mundo"
          webUrl="#"
        />

        <ProjectCard
          // key={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor laborum optio sunt sint delectus soluta. Molestiae quia aperiam quos est veniam nostrum, laboriosam perferendis quis, illum, exercitationem repellat. Esse."
          image="/996179a2cd21784c1188412b4e55c167.jpg"
          tags={['React', 'Nextjs', 'TailwindCSS']}
          title="Hola mundo"
          webUrl="#"
        />

        <ProjectCard
          // key={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor laborum optio sunt sint delectus soluta. Molestiae quia aperiam quos est veniam nostrum, laboriosam perferendis quis, illum, exercitationem repellat. Esse."
          image="/d8e681698d3baa716d17cdd7507a83e8.jpg"
          tags={['React', 'Nextjs', 'TailwindCSS']}
          title="Hola mundo"
          webUrl="#"
        />

        <ProjectCard
          // key={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor laborum optio sunt sint delectus soluta. Molestiae quia aperiam quos est veniam nostrum, laboriosam perferendis quis, illum, exercitationem repellat. Esse."
          image="/fe08f493beea9ae158b445386a5034a8.jpg"
          tags={['React', 'Nextjs', 'TailwindCSS']}
          title="Hola mundo"
          webUrl="#"
        />
      </Spotlight>

      <Link href={'#'}>
        <Button
          className="focus-visible:outline-1 text-lg font-bold focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 hover:bg-transparent dark:text-gray-300"
          variant="link"
        >
          ver mas
        </Button>
      </Link>
    </section>
  )
}
