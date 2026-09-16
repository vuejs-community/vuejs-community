import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'olovacompiler',
  description: 'Compiler and Vite plugin for Olova.js components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'olova',
    'olova.js',
    'compiler',
    'vite-plugin',
    'vite',
    'component',
  ],
  source: {
    github: 'yourusername/olovacompiler',
    npm: 'olovacompiler',
  },
  links: {
    github: 'https://github.com/yourusername/olovacompiler',
    npm: 'https://www.npmjs.com/package/olovacompiler',
    website: 'https://github.com/yourusername/olovacompiler#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
