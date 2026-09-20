import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-runtime',
  description: 'Configure environment variables on runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'runtime',
    'config',
  ],
  links: {
    github: 'https://github.com/werheng/vite-plugin-env-runtime',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-runtime',
    website: 'https://github.com/werheng/vite-plugin-env-runtime#readme',
  },
  source: {
    github: 'werheng/vite-plugin-env-runtime',
    npm: 'vite-plugin-env-runtime',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1269,
      weekly: 207,
    },
  },
})
