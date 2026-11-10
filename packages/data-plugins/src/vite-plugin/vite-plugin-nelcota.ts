import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nelcota',
  description: 'Vite plugin for NelcotaJS: compiles TSX with @nelcota/compiler and adds basic HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'jsx',
    'nelcota',
    'signals',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Nelcota/NelcotaJS',
    npm: 'https://www.npmjs.com/package/vite-plugin-nelcota',
    website: 'https://github.com/Nelcota/NelcotaJS#readme',
  },
  source: {
    github: 'Nelcota/NelcotaJS',
    npm: 'vite-plugin-nelcota',
  },
})
