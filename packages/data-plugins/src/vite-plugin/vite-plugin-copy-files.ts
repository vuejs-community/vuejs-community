import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-copy-files',
  description: 'This package can help you move some files that do not need to be packaged to the corresponding packaging directory',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/mistjs/vite-plugin-copy-files',
    npm: 'https://www.npmjs.com/package/vite-plugin-copy-files',
    website: 'https://github.com/mistjs/vite-plugin-copy-files#readme',
  },
  source: {
    github: 'mistjs/vite-plugin-copy-files',
    npm: 'vite-plugin-copy-files',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 95,
      weekly: 17,
    },
  },
})
