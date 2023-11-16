'use client'

import dynamic from 'next/dynamic'

const DynamicSpline = dynamic(async () => await import('@splinetool/react-spline'), {
  loading: () => <p className="text-3xl text-white"> Loading...</p>,
  ssr: false
})

export function Spline(): React.ReactNode {
  return <DynamicSpline scene="https://prod.spline.design/qG2YwczMrjiwPSrZ/scene.splinecode" />
}
