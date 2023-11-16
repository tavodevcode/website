import Image from 'next/image'

import { AnimatedGradientText } from './animated-gradient-text'
import WorkCard from './work-card'

export default function WorkTimeline(): React.ReactElement {
  return (
    <section className="relative container px-32 flex flex-col justify-center items-center font-poppins ">
      <Image
        priority
        alt="rawpixel-12706807"
        className="absolute -left-[250px] -bottom-[150px] -rotate-[15deg] z-30"
        height="300"
        src={'/ui/image-from-rawpixel-id-12706807-png.png'}
        width="300"
      />

      <div className="-z-10 absolute -left-[100%] -bottom-[900px] w-[1550px] h-[1550px] [background:radial-gradient(closest-side,#a704ffa3,transparent)]" />

      <AnimatedGradientText
        className="text-6xl mb-11"
        // bg-[linear-gradient(to_right,theme(colors.red.400),theme(colors.red.300),theme(colors.red.400),theme(colors.red.400),theme(colors.red.400),theme(colors.red.500),theme(colors.red.400))]
        text="Mis experiencia"
      />

      <WorkCard
        companyDescription="IT Matters, Monterrey, Nuevo León, México"
        companyPosition="ServiceNow Developer"
        description={[
          // 'Desarrollo de aplicación nativa utilizando el framework de React Native',
          'Contribuí en el sector salud, agilizando la gestión de pacientes con problemas de la tuberculosis',
          'Utilicé React Native para desarrollar la interfaz de usuario de la aplicación, aprovechando la biblioteca React Native Paper para el diseño'
          // 'Uso de metodología ágil XP'
        ]}
        time="Ago 2023 - Actual"
      />

      <WorkCard
        companyDescription="Spacebar, Ciudad de México, México"
        companyPosition="Programador FullStack - Desarrollo de sitios web eccomerce"
        description={[
          'Desarrollo de aplicaciones B2B y B2C como programador FullStack, utilizando tecnologías como JavaScript, TypeScript, Php, React.js, Node.js y MongoDB, MySQL',
          'Manejo de consumo de APIs para integracion de aplicaciones web',
          'Implementación de widgets personalizados para mejorar la experiencia de usuario y la funcionalidad de los sitios web',
          'Mantenimiento y desarrollo de middlewares basados en Node.js, optimizando el rendimiento y la escalabilidad de las aplicaciones',
          'Manejo de plataformas en ecommerce como BigCommerce y VTEX',
          'Implementación de CI/CD utilizando herramientas como GitHub Actions, agilizando el despliegue y la optimización de servidores basados en AWS',
          'Manejo de herramientas AWS, EC2, S3 y RDS , para la implementación y gestión de infraestructuras en la nube, así como el manejo de bases de datos en MySQL',
          'Utilización de Docker para el control de aplicaciones, facilitando la creación de entornos de desarrollo reproducibles y la administración de contenedores',
          'Manejo de github para el control de versiones y el trabajo en equipo',
          'Aplicación de la metodología ágil Scrum'
        ]}
        time="Jun 2021 - May 2023"
      />

      <WorkCard
        companyDescription="Playful, Monterrey, Nuevo León, México"
        companyPosition="Desarrollador de procesos - automatización de bots"
        description={[
          'Desarrollo de aplicación nativa utilizando el framework de React Native',
          'Contribuí en el sector salud, agilizando la gestión de pacientes con problemas de la tuberculosis',
          'Utilicé React Native para desarrollar la interfaz de usuario de la aplicación, aprovechando la biblioteca React Native Paper para el diseño',
          'Uso de metodología ágil XP'
        ]}
        time="Ene 2022 - Abr 2022"
      />

      <WorkCard
        companyDescription="KETOGAINS, Las Vegas, Nevada USA"
        companyPosition="Programador FullStack - Desarrollo de sitio web"
        description={[
          'Participé como becario en KETOGAINS, una empresa en Las Vegas, Nevada USA, donde fui responsable del desarrollo de un sitio web utilizando tecnologías como Reactjs, GraphQL y Hasura',
          'Manejo de plataformas para desplege de aplicaciones en netilfy',
          'Uso de express para desarrollo de scrpts y consumo de apis con swagger',
          'Utilicé Azure DevOps como herramienta de gestión de proyectos y control de versiones',
          'Trabajé en el manejo de WordPress, realizando configuraciones, creacion de temas y modificacion de plugins',
          'Control de versiones usando gitHub',
          'Uso de metodología ágil scrum'
        ]}
        time="Oct 2021 - Abr 2022"
      />

      <WorkCard
        companyDescription="Universidad Tecnológica de la Huasteca Hidalguense, Huejutla de Reyes Hidalgo"
        companyPosition="Desarrollador de software FullStack - Aplicación móvil"
        description={[
          'Desarrollo de aplicación nativa utilizando el framework de React Native',
          'Contribuí en el sector salud, agilizando la gestión de pacientes con problemas de la tuberculosis',
          'Utilicé React Native para desarrollar la interfaz de usuario de la aplicación, aprovechando la biblioteca React Native Paper para el diseño',
          'Uso de metodología ágil XP'
        ]}
        time="May 2020 - Ago 2020"
      />
    </section>
  )
}
