import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kitlens/vite-plugin',
  description: 'Vite plugin for KitLens component usage analysis',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'kitlens',
    'vite',
    'vite-plugin',
    'react',
    'ast',
    'component-analysis',
    'component-usage',
    'design-system',
    'static-analysis',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/okrahul/kitLens',
    npm: 'https://www.npmjs.com/package/@kitlens/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
