import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bcdesign/source-loc-vite',
  description: 'Inject source location metadata into Vue SFC elements for visual editing tools.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue',
    'source-loc',
    'visual-editor',
    'devtools',
  ],
  source: {
    npm: '@bcdesign/source-loc-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@bcdesign/source-loc-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 5,
    },
  },
})
