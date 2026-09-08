import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ignore-public',
  description: 'Ignore public directories at build time',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'guangzan/vite-plugin-ignore-public',
    npm: 'vite-plugin-ignore-public',
  },
  links: {
    github: 'https://github.com/guangzan/vite-plugin-ignore-public',
    npm: 'https://www.npmjs.com/package/vite-plugin-ignore-public',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
