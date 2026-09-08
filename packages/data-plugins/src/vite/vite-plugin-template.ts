import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-template',
  description: 'A Vite plugin for modifying the input html template.',
  icon: 'logos:vite-icon',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'template',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'harrisoff/vite-plugin-template',
    npm: 'vite-plugin-template',
  },
  links: {
    github: 'https://github.com/harrisoff/vite-plugin-template',
    npm: 'https://www.npmjs.com/package/vite-plugin-template',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
