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
  links: {
    npm: 'https://www.npmjs.com/package/design-folio',
  },
  source: {
    npm: 'design-folio',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
