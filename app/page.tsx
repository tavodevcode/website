import Image from 'next/image'

import { SlidingTitleAnimation } from '@/components/sliding-animation-title'
import { AnimatedGradientText } from '@/components/animated-gradient-text'
import { InfiniteHorizontalAnimation } from '@/components/infinite-horizontal-animation'
// import Particles from '@/components/particles'
import ProjectCardList from '@/components/project-card-list'
import WorkTimeline from '@/components/work-timeline'
import Terminal from '@/components/terminal'
import ContactForm from '@/components/contact-form'
// import { EmailTemplate } from '@/components/email-template'

export default function Home(): JSX.Element {
  return (
    <main className="w-full min-h-screen flex flex-col gap-10 relative overflow-x-clip mt-[50px]">
      {/* <div className="-z-10 absolute -right-[40%] -top-[500px] w-[1550px] h-[1550px] [background:radial-gradient(closest-side,#a704ffa3,transparent)]" /> */}
      <div className="-z-10 absolute -left-[40%] -top-[1000px] w-[1550px] h-[1550px] [background:radial-gradient(closest-side,#a704ffa3,transparent)]" />

      <section className="w-full h-auto container flex overflow-hidden font-poppins">
        <div className="flex flex-col w-1/2">
          <SlidingTitleAnimation />
        </div>
        <div className="w-1/2">
          <Image
            priority
            alt="image-header"
            className="ml-[20px] mt-[20px]"
            height="600"
            src={'./Image-header.svg'}
            width="600"
          />
        </div>
      </section>

      <section className="w-full min-h-[500px] container flex relative mt-[90px] font-poppins ">
        <Image
          priority
          alt="image-from-rawpixel-id-12179633"
          className="absolute -right-[200px] -top-[100px] -rotate-[12deg]"
          height="300"
          src={'/ui/image-from-rawpixel-id-12179633-png.png'}
          width="300"
        />

        <div className="w-1/2 flex justify-center items-center">
          <Image
            priority
            alt="image-profile"
            className="w-1/2 flex justify-center items-center rounded-full mr-20"
            height="300"
            src={'/gustavo.jpg'}
            width="300"
          />
        </div>
        <div className="w-auto flex flex-col justify-center">
          <h1 className="w-[580px] font-extrabold text-mainblack text-[40px] leading-normal">
            Sobre mi carrera y quien soy
          </h1>
          <p className="w-[580px] font-light mt-[15px] text-mainblack text-[18px] opacity-80">
            Peter Parker era un adolescente como cualquier otro. Estudiaba en el Instituto Midtown de la ciudad de Nueva
            York, y vivía en Queens con su tía May y su tío Ben. Peter era muy buen estudiante y uno de los chicos más
            inteligentes del instituto. Por desgracia, sus buenas notas no ayudaban a hacerle muy popular entre sus
            compañeros de clase.
          </p>
        </div>
      </section>

      <section
        className="w-full h-auto container flex flex-col justify-center items-center font-poppins mt-[50px] gap-5"
        id="abilities"
      >
        <AnimatedGradientText className="text-6xl mb-11" text="Habilidades" />

        <InfiniteHorizontalAnimation
          svgs={[
            { svg: 'Angular' },
            { svg: 'Antdesign', title: 'AntDesign' },
            { svg: 'Aws' },
            { svg: 'Azure' },
            { svg: 'Bigcommerce' },
            { svg: 'Bootstrap', title: 'Bootstrap' },
            { svg: 'Codeigniter', title: 'CodeIgniter' },
            { svg: 'Docker' },
            { svg: 'Eslint', title: 'ESLint' },
            { svg: 'Express' },
            { svg: 'Figma', title: 'Figma' }
          ]}
        />

        <InfiniteHorizontalAnimation
          svgs={[
            { svg: 'Git' },
            { svg: 'Graphql' },
            { svg: 'Java' },
            { svg: 'Javascript', title: 'JavaScript' },
            { svg: 'Jquery' },
            { svg: 'Laravel', title: 'Laravel' },
            { svg: 'Linux', title: 'Linux' },
            { svg: 'MongoDB', title: 'MongoDB' },
            { svg: 'MySQL' },
            { svg: 'Nest', title: 'NestJs' },
            { svg: 'Next', title: 'NextJs' }
          ]}
          variant="reverse"
        />

        <InfiniteHorizontalAnimation
          svgs={[
            { svg: 'Php' },
            { svg: 'Postgres', title: 'Postgres' },
            { svg: 'Postman', title: 'Postman' },
            { svg: 'Prisma', title: 'Prisma' },
            { svg: 'ReactJs', title: 'ReactJs' },
            { svg: 'Sass' },
            { svg: 'Tailwind', title: 'Tailwind' },
            { svg: 'Typescript', title: 'TypeScript' },
            { svg: 'Vtex', title: 'Vtex' },
            { svg: 'Vue', title: 'VueJs' },
            { svg: 'Windows', title: 'Windows' }
          ]}
        />
      </section>

      <ProjectCardList />

      <div className="w-full h-[700px] flex container relative font-poppins">
        <div className="-z-10 absolute left-[60%] -top-[500px] w-[1550px] h-[1550px] [background:radial-gradient(closest-side,#a704ffa3,transparent)]" />

        <div className="w-1/2 h-full flex justify-center items-center flex-col">
          <div className="w-[80%] h-auto">
            <h1 className="w-[580px] font-extrabold text-mainblack text-[40px] leading-normal">
              Buenas practicas y creacion de aplicaiones a escala.
            </h1>
            <p className="font-light mt-[15px] text-mainblack text-[18px] opacity-80">
              Siempre siguiendo las mejores prácticas posibles basada en la documentación oficial de las tecnologías
              requeridas.
            </p>
          </div>
        </div>
        <Terminal />

        <Image
          priority
          alt="image-from-rawpixel-id-12706083-png"
          className="absolute -right-[150px] -bottom-[50px] z-30 -rotate-[15deg]"
          height="450"
          src={'/ui/image-from-rawpixel-id-12706083-png.png'}
          width="450"
        />
      </div>

      <WorkTimeline />

      <ContactForm />
      {/* <EmailTemplate email="si" /> */}
    </main>
  )
}

// {/* <Spline /> */}
