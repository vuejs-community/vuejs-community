import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inspect-config',
  description: 'inspect vite resolved config with infinite object level',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'tjx666/vite-plugin-inspect-config',
    npm: 'vite-plugin-inspect-config',
  },
  links: {
    github: 'https://github.com/tjx666/vite-plugin-inspect-config',
    npm: 'https://www.npmjs.com/package/vite-plugin-inspect-config',
    website: 'https://github.com/tjx666/vite-plugin-inspect-config#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
