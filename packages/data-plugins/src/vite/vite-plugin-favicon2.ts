import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-favicon2',
  description: 'Create and manage favicons for vite bundles, mostly compatible with the config of favicons-webpack-plugin',
  icon: 'logos:vite-icon',
  version: '1.1.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'favicon',
    'favicons',
    'image',
    'generate',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'khalwat/vite-plugin-favicon',
    npm: 'vite-plugin-favicon2',
  },
  links: {
    github: 'https://github.com/khalwat/vite-plugin-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-favicon2',
  },
  stats: {
    downloads: {
      monthly: 4432,
      weekly: 1051,
    },
  },
})
