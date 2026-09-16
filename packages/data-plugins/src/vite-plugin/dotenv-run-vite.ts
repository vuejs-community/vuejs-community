import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dotenv-run/vite',
  description: 'Run your scripts with dotenv variables',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dotenv',
    'run',
    'cli',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: '@dotenv-run/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@dotenv-run/vite',
    website: 'https://github.com/chihab/dotenv-run',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 524,
      weekly: 97,
    },
  },
})
