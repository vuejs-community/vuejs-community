import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-import2',
  description: 'A tool look like babel-plugin-import and can auto inject to vite\'s Pre-bundling dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'auto-include',
    'vite-plugin',
    'vite',
    'babel-plugin-import',
    'vite-plugin-import',
    'rollup-plugin',
  ],
  source: {
    github: 'cx690/vite-plugin-import2',
    npm: 'vite-plugin-import2',
  },
  links: {
    github: 'https://github.com/cx690/vite-plugin-import2',
    npm: 'https://www.npmjs.com/package/vite-plugin-import2',
    website: 'https://github.com/cx690/vite-plugin-import2#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
