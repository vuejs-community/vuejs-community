import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-online-debug',
  description: 'debug with online environment',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-online-debug',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-online-debug',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
