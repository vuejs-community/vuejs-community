import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@modulespress/vite-plugin',
  description: 'Vite plugin for ModulesPress framework.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'modulespress',
    'vite',
    'vite-plugin',
    'vite-plugin-modulespress',
    'modulespress-vite-plugin',
    'wordpress',
    'wordpress-plugin',
    'wordpress-vite-plugin',
    'wordpress-vite',
  ],
  links: {
    github: 'https://github.com/devsroutes/vite-plugin-modulespress',
    npm: 'https://www.npmjs.com/package/@modulespress/vite-plugin',
    website: 'https://github.com/devsroutes/vite-plugin-modulespress',
  },
  source: {
    github: 'devsroutes/vite-plugin-modulespress',
    npm: '@modulespress/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
