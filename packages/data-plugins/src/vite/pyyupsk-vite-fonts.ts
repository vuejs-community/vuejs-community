import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pyyupsk/vite-fonts',
  description: 'Vite plugin that downloads and self-hosts web fonts at build time',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'astro',
    'fonts',
    'google-fonts',
    'self-host',
    'vite',
    'vite-plugin',
    'web-fonts',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pyyupsk/vite-fonts',
    npm: 'https://www.npmjs.com/package/@pyyupsk/vite-fonts',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 6,
    },
  },
})
