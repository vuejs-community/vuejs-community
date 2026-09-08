import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-custom-media',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'css',
    'custom media qeury',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kyohei-23/vite-plugin-custom-media-query',
    npm: 'vite-plugin-custom-media',
  },
  links: {
    github: 'https://github.com/kyohei-23/vite-plugin-custom-media-query',
    npm: 'https://www.npmjs.com/package/vite-plugin-custom-media',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 7,
    },
  },
})
