import localFont from 'next/font/local'

export const poppins = localFont({
  src: [
    {
      path: '../fonts/poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-ThinItalic.ttf',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../fonts/poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../fonts/poppins/Poppins-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-poppins'
})

export const caveat = localFont({
  src: [
    {
      path: '../fonts/caveat/Caveat-Regular.ttf',
      weight: '400'
    },
    {
      path: '../fonts/caveat/Caveat-Medium.ttf',
      weight: '500'
    },
    {
      path: '../fonts/caveat/Caveat-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../fonts/caveat/Caveat-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-caveat'
})
