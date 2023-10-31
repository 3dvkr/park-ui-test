import { defineConfig } from '@pandacss/dev'
import {badgeRecipe} from "./badgeRecipe"

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      recipes: {
        badge: badgeRecipe
      }
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
})
