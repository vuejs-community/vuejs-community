import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform__require-to-import',
  description: 'Replace the __require methods inside a third-party component',
  version: '1.1.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'esbuild',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yangyanhui1217/vite-plugins-related',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform__require-to-import',
  },
  stats: {
    downloads: {
      monthly: 51,
      weekly: 3,
    },
  },
})
