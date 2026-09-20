import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-antigravity-inspector',
  description: 'Component inspector and dev navigation toolbar for Vite and Antigravity IDE',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'antigravity',
    'inspector',
    'react',
    'click-to-component',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-antigravity-inspector',
  },
  source: {
    npm: 'vite-plugin-antigravity-inspector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 140,
      weekly: 140,
    },
  },
})
