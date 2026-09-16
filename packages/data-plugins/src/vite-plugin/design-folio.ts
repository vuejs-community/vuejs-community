import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'design-folio',
  description: 'A design presentation system for vibe-coded prototypes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'design',
    'prototype',
    'viewer',
    'vite-plugin',
  ],
  source: {
    npm: 'design-folio',
  },
  links: {
    npm: 'https://www.npmjs.com/package/design-folio',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
