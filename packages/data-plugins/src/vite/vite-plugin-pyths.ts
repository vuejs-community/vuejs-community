import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pyths',
  description: 'Vite plugin for PythScribe — compile .ps and .psc files to JavaScript with Fast Refresh',
  version: '0.2.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/swetmr/pythscribe',
    npm: 'https://www.npmjs.com/package/vite-plugin-pyths',
  },
  stats: {
    downloads: {
      monthly: 690,
      weekly: 508,
    },
  },
})
