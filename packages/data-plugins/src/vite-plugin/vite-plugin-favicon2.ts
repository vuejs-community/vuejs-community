import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-favicon2',
  description: 'Create and manage favicons for vite bundles, mostly compatible with the config of favicons-webpack-plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'favicon',
    'favicons',
    'image',
    'generate',
  ],
  source: {
    github: 'khalwat/vite-plugin-favicon',
    npm: 'vite-plugin-favicon2',
  },
  links: {
    github: 'https://github.com/khalwat/vite-plugin-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-favicon2',
    website: 'https://github.com/khalwat/vite-plugin-favicon#readme',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 3683,
      weekly: 515,
    },
  },
})
