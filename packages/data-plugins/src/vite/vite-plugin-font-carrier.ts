import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-carrier',
  description: 'Compress font on demand.',
  icon: 'logos:vite-icon',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'font',
    'optimization',
    'compress',
    'extractor',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Bernankez/vite-plugin-font-carrier',
    npm: 'vite-plugin-font-carrier',
  },
  links: {
    github: 'https://github.com/Bernankez/vite-plugin-font-carrier',
    npm: 'https://www.npmjs.com/package/vite-plugin-font-carrier',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 13,
    },
  },
})
