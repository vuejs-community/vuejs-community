import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fastapi-vite-plugin',
  description: 'FastAPI plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fastapi',
    'startkit',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fastapi-startkit/fastapi-startkit-modules',
    npm: 'https://www.npmjs.com/package/fastapi-vite-plugin',
    website: 'https://fastapi-startkit.github.io/',
  },
  source: {
    github: 'fastapi-startkit/fastapi-startkit-modules',
    npm: 'fastapi-vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 67,
      weekly: 18,
    },
  },
})
