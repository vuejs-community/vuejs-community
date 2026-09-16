import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@poprize/plugin-vite',
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
    npm: '@poprize/plugin-vite',
  },
  links: {
    github: 'https://github.com/poprize/vite-plugin',
    npm: 'https://www.npmjs.com/package/@poprize/plugin-vite',
    website: 'https://github.com/poprize/vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 1,
    },
  },
})
