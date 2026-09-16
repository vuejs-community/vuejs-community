import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wirestate/dev',
  description: 'Development bundler plugins enabling hot reload for Wirestate services',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'wirestate',
    'hmr',
    'hot-reload',
    'vite-plugin',
    'dependency-injection',
    'typescript',
  ],
  source: {
    github: 'Neloreck/wirestate',
    npm: '@wirestate/dev',
  },
  links: {
    github: 'https://github.com/Neloreck/wirestate',
    npm: 'https://www.npmjs.com/package/@wirestate/dev',
    website: 'https://github.com/Neloreck/wirestate#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 404,
      weekly: 103,
    },
  },
})
