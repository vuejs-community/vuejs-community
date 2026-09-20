import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'glinter-plugin-vite',
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
  links: {
    github: 'https://github.com/poprize/vite-plugin',
    npm: 'https://www.npmjs.com/package/glinter-plugin-vite',
    website: 'https://github.com/poprize/vite-plugin#readme',
  },
  source: {
    github: 'poprize/vite-plugin',
    npm: 'glinter-plugin-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
