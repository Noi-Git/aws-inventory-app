import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'
import colors from 'tailwindcss/colors'

const baseColors = [
  //setup base color
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
]

const shadeMapping = {
  '50': '900', //50 = in light mode: 900 = in dark mode
  '100': '800', //Ex.text gray 100 in light mode -- will convert to -- text gray 800 in dark mode
  '200': '700',
  '300': '600',
  '400': '500',
  '500': '400',
  '600': '300',
  '700': '200',
  '800': '100',
  '900': '50',
}

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {}
  baseColors.forEach((color) => {
    // set color to the oposit of the current color
    theme[color] = {}
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key //inverting based on light mode or dark mode
      theme[color][key] = colors[color][shadeKey]
    })
  })
  return theme
}

const lightTheme = generateThemeObject(colors, shadeMapping)
const darkTheme = generateThemeObject(colors, shadeMapping, true)

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
