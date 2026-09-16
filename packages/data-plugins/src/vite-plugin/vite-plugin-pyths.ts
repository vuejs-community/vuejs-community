import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pyths',
  description: 'Vite plugin for PythScribe — compile .ps and .psc files to JavaScript with Fast Refresh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pyths',
    'pythscribe',
    'python',
    'compiler',
    'react',
    'fast-refresh',
  ],
  source: {
    github: 'swetmr/pythscribe',
    npm: 'vite-plugin-pyths',
  },
  links: {
    github: 'https://github.com/swetmr/pythscribe',
    npm: 'https://www.npmjs.com/package/vite-plugin-pyths',
    website: 'https://github.com/swetmr/pythscribe#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 705,
      weekly: 18,
    },
  },
})
