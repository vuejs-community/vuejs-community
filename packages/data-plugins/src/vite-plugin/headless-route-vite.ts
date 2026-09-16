import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@headless-route/vite',
  description: 'Vite plugin for integrating headless-route',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'route',
    'routes',
    'router',
    'mpa',
    'static-site',
    'ssg',
    'cms',
    'headless-route',
  ],
  source: {
    github: 'bent10/headless-route',
    npm: '@headless-route/vite',
  },
  links: {
    github: 'https://github.com/bent10/headless-route',
    npm: 'https://www.npmjs.com/package/@headless-route/vite',
    website: 'https://github.com/bent10/headless-route#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 101,
      weekly: 18,
    },
  },
})
