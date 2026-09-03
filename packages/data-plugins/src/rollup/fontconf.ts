import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'fontconf',
  description: 'A Vite plugin to generate fallback fonts based on font metrics',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'fallback font',
    'font metrics',
    'content layout shift',
    'size adjust',
    'cls',
    'vite-plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/fontconf',
  },
  stats: {
    downloads: {
      monthly: 88,
      weekly: 25,
    },
  },
})
