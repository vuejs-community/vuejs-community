import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-template',
  description: 'A Vite plugin for modifying the input html template.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'template',
  ],
  source: {
    github: 'harrisoff/vite-plugin-template',
    npm: 'vite-plugin-template',
  },
  links: {
    github: 'https://github.com/harrisoff/vite-plugin-template',
    npm: 'https://www.npmjs.com/package/vite-plugin-template',
    website: 'https://github.com/harrisoff/vite-plugin-template/tree/master/#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
