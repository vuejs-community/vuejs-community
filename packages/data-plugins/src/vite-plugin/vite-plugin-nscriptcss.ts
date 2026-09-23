import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nscriptcss',
  description: 'Compilador en tiempo real e integrador de Vite para Nexus Script Cascade Style Sheets (.nscss)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'nscriptcss',
    'nscss',
    'css-in-js',
    'reactive-css',
    'compiler',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-nscriptcss',
  },
  source: {
    npm: 'vite-plugin-nscriptcss',
  },
})
