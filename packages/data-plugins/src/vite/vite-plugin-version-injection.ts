import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-injection',
  description: 'A vite plugin that injects version information into your vite based application',
  icon: 'logos:vite-icon',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'version',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-version-injection',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-injection',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
