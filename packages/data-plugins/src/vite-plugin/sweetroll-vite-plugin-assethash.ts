import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sweetroll/vite-plugin-assethash',
  description: 'A Vite plugin to hash files from specified directories and add them to the Rollup manifest.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sweetroll/vite-plugin-assethash',
    npm: 'https://www.npmjs.com/package/@sweetroll/vite-plugin-assethash',
    website: 'https://github.com/sweetroll/vite-plugin-assethash#readme',
  },
  source: {
    github: 'sweetroll/vite-plugin-assethash',
    npm: '@sweetroll/vite-plugin-assethash',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 46,
      weekly: 2,
    },
  },
})
