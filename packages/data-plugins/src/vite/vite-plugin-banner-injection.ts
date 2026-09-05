import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-banner-injection',
  description: 'Insert specified content into the build bundle code',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'banner',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LightAPIs/vite-plugin-banner-injection',
    npm: 'https://www.npmjs.com/package/vite-plugin-banner-injection',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
