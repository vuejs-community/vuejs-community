import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-injection',
  description: 'A vite plugin that injects version information into your vite based application',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'version',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-version-injection',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-injection',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
