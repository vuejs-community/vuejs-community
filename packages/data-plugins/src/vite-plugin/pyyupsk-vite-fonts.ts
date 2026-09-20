import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pyyupsk/vite-fonts',
  description: 'Vite plugin that downloads and self-hosts web fonts at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro',
    'fonts',
    'google-fonts',
    'self-host',
    'vite',
    'vite-plugin',
    'web-fonts',
  ],
  links: {
    github: 'https://github.com/pyyupsk/vite-fonts',
    npm: 'https://www.npmjs.com/package/@pyyupsk/vite-fonts',
    website: 'https://github.com/pyyupsk/vite-fonts#readme',
  },
  source: {
    github: 'pyyupsk/vite-fonts',
    npm: '@pyyupsk/vite-fonts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
