import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-simple-json-server',
  description: 'Provide a file-based mock API for Vite in dev mode',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'json',
    'api',
    'server',
  ],
  links: {
    github: 'https://github.com/alextim/vite-plugin-simple-json-server',
    npm: 'https://www.npmjs.com/package/vite-plugin-simple-json-server',
    website: 'https://github.com/alextim/vite-plugin-simple-json-server/tree/main/packages/vite-plugin-simple-json-server#readme',
  },
  source: {
    github: 'alextim/vite-plugin-simple-json-server',
    npm: 'vite-plugin-simple-json-server',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 412,
      weekly: 50,
    },
  },
})
