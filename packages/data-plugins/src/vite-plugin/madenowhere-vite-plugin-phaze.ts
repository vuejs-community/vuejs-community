import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@madenowhere/vite-plugin-phaze',
  description: 'Vite plugin family for Phaze apps. Currently ships a standardized bundle-size reporter (raw / gzip-9 / brotli-default per chunk, with eager-vs-lazy classification). Future features: deploy preflight, dev-experience helpers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'phaze',
    'bundle',
    'size',
    'report',
    'brotli',
  ],
  source: {
    github: 'madenowhere/phaze',
    npm: '@madenowhere/vite-plugin-phaze',
  },
  links: {
    github: 'https://github.com/madenowhere/phaze',
    npm: 'https://www.npmjs.com/package/@madenowhere/vite-plugin-phaze',
    website: 'https://phaze.build',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
