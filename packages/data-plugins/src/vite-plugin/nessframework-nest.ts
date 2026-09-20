import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nessframework/nest',
  description: 'NestJS server routes for Ness.js applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ness',
    'nessjs',
    'plugin',
    'nestjs',
    'dependency-injection',
    'controllers',
    'backend',
    'vite',
    'vite-plugin',
    'express',
    'typescript',
    'api-routes',
    'hot-reload',
  ],
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/nest',
    website: 'https://nessjs.com/docs/plugins/nest',
  },
  source: {
    github: 'leroyanders/Ness.js',
    npm: '@nessframework/nest',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 764,
      weekly: 35,
    },
  },
})
