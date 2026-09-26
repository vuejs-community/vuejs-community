import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-string-plugin',
  description: 'Vite plugin to import files as string',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'string',
    'raw',
    'import',
    'loader',
  ],
  links: {
    github: 'https://github.com/silverwind/vite-string-plugin',
    npm: 'https://www.npmjs.com/package/vite-string-plugin',
    website: 'https://github.com/silverwind/vite-string-plugin#readme',
  },
  source: {
    github: 'silverwind/vite-string-plugin',
    npm: 'vite-string-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30275,
      weekly: 4969,
    },
  },
})
