import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-port-checker',
  description: 'A Vite plugin that warns if the dev server is running on a browser-restricted port.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'port',
    'restricted-port',
    'browser-blocked-port',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-port-checker',
    website: 'https://git.onixbyte.com/onixbyte/vite-plugin-port-checker#readme',
  },
  source: {
    npm: 'vite-plugin-port-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
