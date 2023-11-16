import Image from 'next/image'

import Form from '@/components/form'

// import { AnimatedGradientText } from './animated-gradient-text'

export default function ContactForm(): React.ReactElement {
  return (
    <section className="relative container mb-28 mt-28 flex justify-between" id="contact">
      {/* <div className="-z-10 absolute left-[70%] -top-[700px] w-[1550px] h-[1550px] [background:radial-gradient(closest-side,#a704ffa3,transparent)]" /> */}

      <div className="w-1/2">
        {/* <AnimatedGradientText
          className="w-full font-extrabold text-mainblack text-[40px] leading-normal font-poppins"
          text="¡Empecemos a desarrollar tu proyecto!"
        /> */}
        <h1 className="font-extrabold text-mainblack text-[40px] leading-normal">
          ¡Empecemos a desarrollar tu proyecto!
        </h1>
        <p className="w-[580px] font-light mt-[15px] text-mainblack text-[18px] opacity-80 font-poppins">
          Si tienes un proyecto en mente y necesitas ayuda para llevarlo a cabo, no dudes en contactarme.
        </p>
        <div className="w-3/4 mt-10">
          <Image priority alt="campaign-amico.png" height={1000} src={'/campaign-amico.png'} width={1000} />
        </div>
      </div>
      <div className="w-1/2">
        <Form />
      </div>
    </section>
  )
}
