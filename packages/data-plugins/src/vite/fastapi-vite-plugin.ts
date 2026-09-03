import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'fastapi-vite-plugin',
  description: 'FastAPI plugin for Vite.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'fastapi',
    'startkit',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fastapi-startkit/fastapi-startkit-modules',
    npm: 'https://www.npmjs.com/package/fastapi-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 22,
    },
  },
})
