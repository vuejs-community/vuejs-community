import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-signature',
  description: 'Vite plugin for working with Signature (web-signature)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'signature',
    'web-signature',
  ],
  links: {
    github: 'https://github.com/Pinbib/signature',
    npm: 'https://www.npmjs.com/package/vite-signature',
    website: 'https://github.com/Pinbib/signature#readme',
  },
  source: {
    github: 'Pinbib/signature',
    npm: 'vite-signature',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
