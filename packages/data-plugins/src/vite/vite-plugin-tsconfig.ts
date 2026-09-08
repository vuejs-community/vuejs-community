import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsconfig',
  description: 'Vite plugin that allows you to use alternate tsconfig files.',
  icon: 'logos:vite-icon',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tsconfig',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'alienfast/vite-plugin-tsconfig',
    npm: 'vite-plugin-tsconfig',
  },
  links: {
    github: 'https://github.com/alienfast/vite-plugin-tsconfig',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsconfig',
  },
  stats: {
    downloads: {
      monthly: 3630,
      weekly: 478,
    },
  },
})
