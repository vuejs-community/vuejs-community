import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsc-watch',
  description: 'Plugs tsc --watch into Vite dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tsc',
    'typescript',
  ],
  links: {
    github: 'https://github.com/ArnaudBarre/vite-plugin-tsc-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsc-watch',
    website: 'https://github.com/ArnaudBarre/vite-plugin-tsc-watch#readme',
  },
  source: {
    github: 'ArnaudBarre/vite-plugin-tsc-watch',
    npm: 'vite-plugin-tsc-watch',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 3896,
      weekly: 545,
    },
  },
})
