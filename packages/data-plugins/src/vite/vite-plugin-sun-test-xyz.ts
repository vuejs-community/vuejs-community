import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sun-test-xyz',
  description: 'upload bundle to cdn',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'wanwu',
    'vite',
    'vite-plugin',
    'cdn-upload',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-sun-test-xyz',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-sun-test-xyz',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
