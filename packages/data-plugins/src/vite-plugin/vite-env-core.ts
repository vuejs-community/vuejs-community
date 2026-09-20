import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-env/core',
  description: 'The env.ts layer for Vite — define once, validate everywhere, import with types',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dotenv',
    'env',
    'environment-variables',
    'standard-schema',
    'typescript',
    'validation',
    'vite',
    'vite-plugin',
    'zod',
  ],
  links: {
    github: 'https://github.com/pyyupsk/vite-env',
    npm: 'https://www.npmjs.com/package/@vite-env/core',
    website: 'https://github.com/pyyupsk/vite-env#readme',
  },
  source: {
    github: 'pyyupsk/vite-env',
    npm: '@vite-env/core',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 761,
      weekly: 583,
    },
  },
})
