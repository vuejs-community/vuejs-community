import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pori15/domco',
  description: 'Minimal Full-Stack JavaScript',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'SSR',
    'SSG',
  ],
  source: {
    github: 'rossrobino/domco',
    npm: '@pori15/domco',
  },
  links: {
    github: 'https://github.com/rossrobino/domco',
    npm: 'https://www.npmjs.com/package/@pori15/domco',
    website: 'https://domco.robino.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
