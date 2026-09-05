import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-port-checker',
  description: 'A Vite plugin that warns if the dev server is running on a browser-restricted port.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'port',
    'restricted-port',
    'browser-blocked-port',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-port-checker',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
