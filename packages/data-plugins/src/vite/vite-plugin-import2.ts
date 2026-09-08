import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-import2',
  description: 'A tool look like babel-plugin-import and can auto inject to vite\'s Pre-bundling dependencies.',
  icon: 'logos:vite-icon',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'auto-include',
    'vite-plugin',
    'vite',
    'babel-plugin-import',
    'vite-plugin-import',
    'rollup-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cx690/vite-plugin-import2',
    npm: 'vite-plugin-import2',
  },
  links: {
    github: 'https://github.com/cx690/vite-plugin-import2',
    npm: 'https://www.npmjs.com/package/vite-plugin-import2',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 5,
    },
  },
})
