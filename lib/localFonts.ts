import localFont from 'next/font/local'

export const poppins = localFont({
  src: [
    {
      path: '../fonts/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-ThinItalic.ttf',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../fonts/Poppins-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-poppins'
})

export const caveat = localFont({
  src: [
    {
      path: '../fonts/Caveat-Regular.ttf',
      weight: '400'
    },
    {
      path: '../fonts/Caveat-Medium.ttf',
      weight: '500'
    },
    {
      path: '../fonts/Caveat-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../fonts/Caveat-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-caveat'
})
