import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform__require-to-import',
  description: 'Replace the __require methods inside a third-party component',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/yangyanhui1217/vite-plugins-related',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform__require-to-import',
  },
  source: {
    github: 'yangyanhui1217/vite-plugins-related',
    npm: 'vite-plugin-transform__require-to-import',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
