import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsc',
  description: 'A Vite plugin which spawns a `tsc --watch` process with Vite dev server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'kazuma1989/vite-plugin-tsc',
    npm: 'vite-plugin-tsc',
  },
  links: {
    github: 'https://github.com/kazuma1989/vite-plugin-tsc',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsc',
    website: 'https://github.com/kazuma1989/vite-plugin-tsc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 408,
      weekly: 35,
    },
  },
})
