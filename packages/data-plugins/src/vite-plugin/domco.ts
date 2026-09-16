import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'domco',
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
    npm: 'domco',
  },
  links: {
    github: 'https://github.com/rossrobino/domco',
    npm: 'https://www.npmjs.com/package/domco',
    website: 'https://domco.robino.dev',
  },
  stats: {
    stars: 82,
    downloads: {
      monthly: 664,
      weekly: 131,
    },
  },
})
