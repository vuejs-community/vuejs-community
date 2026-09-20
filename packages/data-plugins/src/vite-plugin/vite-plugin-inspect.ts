import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inspect',
  description: 'Inspect the intermediate state of Vite plugins',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antfu-collective/vite-plugin-inspect',
    npm: 'https://www.npmjs.com/package/vite-plugin-inspect',
    website: 'https://github.com/antfu-collective/vite-plugin-inspect#readme',
  },
  source: {
    github: 'antfu-collective/vite-plugin-inspect',
    npm: 'vite-plugin-inspect',
  },
  stats: {
    stars: 1698,
    downloads: {
      monthly: 12402940,
      weekly: 2414048,
    },
  },
})
