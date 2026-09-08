import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-apimock',
  description: 'A Vite plugin for API mocking.',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'apimock',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'pangxiaoli/vite-plugin-ApiMock',
    npm: 'vite-plugin-apimock',
  },
  links: {
    github: 'https://github.com/pangxiaoli/vite-plugin-ApiMock',
    npm: 'https://www.npmjs.com/package/vite-plugin-apimock',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
