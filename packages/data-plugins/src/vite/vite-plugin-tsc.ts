import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsc',
  description: 'A Vite plugin which spawns a `tsc --watch` process with Vite dev server.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kazuma1989/vite-plugin-tsc',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsc',
  },
  stats: {
    downloads: {
      monthly: 510,
      weekly: 59,
    },
  },
})
