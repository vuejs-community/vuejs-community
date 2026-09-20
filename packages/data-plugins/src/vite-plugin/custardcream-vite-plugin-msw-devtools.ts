import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@custardcream/vite-plugin-msw-devtools',
  description: 'Vite plugin for @custardcream/msw-devtools',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'msw',
    'devtools',
    'mock-service-worker',
    'testing',
    'development',
    'QA',
    'framework-agnostic',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/custardcream98/msw-devtools',
    npm: 'https://www.npmjs.com/package/@custardcream/vite-plugin-msw-devtools',
    website: 'https://github.com/custardcream98/msw-devtools#readme',
  },
  source: {
    github: 'custardcream98/msw-devtools',
    npm: '@custardcream/vite-plugin-msw-devtools',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
