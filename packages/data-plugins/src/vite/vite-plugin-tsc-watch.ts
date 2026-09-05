import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsc-watch',
  description: 'Plugs tsc --watch into Vite dev server',
  version: '3.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tsc',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ArnaudBarre/vite-plugin-tsc-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsc-watch',
  },
  stats: {
    downloads: {
      monthly: 4763,
      weekly: 1123,
    },
  },
})
