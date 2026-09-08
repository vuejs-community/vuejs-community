import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsc-watch',
  description: 'Plugs tsc --watch into Vite dev server',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'ArnaudBarre/vite-plugin-tsc-watch',
    npm: 'vite-plugin-tsc-watch',
  },
  links: {
    github: 'https://github.com/ArnaudBarre/vite-plugin-tsc-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsc-watch',
  },
  stats: {
    downloads: {
      monthly: 4163,
      weekly: 368,
    },
  },
})
