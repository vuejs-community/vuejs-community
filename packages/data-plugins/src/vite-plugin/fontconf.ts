import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fontconf',
  description: 'A Vite plugin to generate fallback fonts based on font metrics',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fallback font',
    'font metrics',
    'content layout shift',
    'size adjust',
    'cls',
    'vite-plugin',
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/fontconf',
  },
  source: {
    npm: 'fontconf',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 97,
      weekly: 3,
    },
  },
})
