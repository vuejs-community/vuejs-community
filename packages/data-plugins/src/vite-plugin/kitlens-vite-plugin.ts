import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kitlens/vite-plugin',
  description: 'Vite plugin for KitLens component usage analysis',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'okrahul/kitLens',
    npm: '@kitlens/vite-plugin',
  },
  links: {
    github: 'https://github.com/okrahul/kitLens',
    npm: 'https://www.npmjs.com/package/@kitlens/vite-plugin',
    website: 'https://github.com/okrahul/kitLens#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
