import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@madenowhere/vite-plugin-phaze',
  description: 'Vite plugin family for Phaze apps. Currently ships a standardized bundle-size reporter (raw / gzip-9 / brotli-default per chunk, with eager-vs-lazy classification). Future features: deploy preflight, dev-experience helpers.',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'phaze',
    'bundle',
    'size',
    'report',
    'brotli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/madenowhere/phaze',
    npm: 'https://www.npmjs.com/package/@madenowhere/vite-plugin-phaze',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
