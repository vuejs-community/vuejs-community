import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unova-plugin-vite',
  description: 'Poprize react with SWC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'poprize',
    'react',
    'swc',
    'react-refresh',
    'fast refresh',
  ],
  source: {
    github: 'poprize/vite-plugin',
    npm: 'unova-plugin-vite',
  },
  links: {
    github: 'https://github.com/poprize/vite-plugin',
    npm: 'https://www.npmjs.com/package/unova-plugin-vite',
    website: 'https://github.com/poprize/vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
