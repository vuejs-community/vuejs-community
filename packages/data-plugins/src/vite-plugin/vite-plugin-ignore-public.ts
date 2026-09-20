import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ignore-public',
  description: 'Ignore public directories at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/guangzan/vite-plugin-ignore-public',
    npm: 'https://www.npmjs.com/package/vite-plugin-ignore-public',
    website: 'https://github.com/guangzan/vite-plugin-ignore-public#readme',
  },
  source: {
    github: 'guangzan/vite-plugin-ignore-public',
    npm: 'vite-plugin-ignore-public',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
