import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vinxi/vite-plugin-inspect',
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
    github: 'https://github.com/antfu/vite-plugin-inspect',
    npm: 'https://www.npmjs.com/package/@vinxi/vite-plugin-inspect',
    website: 'https://github.com/antfu/vite-plugin-inspect#readme',
  },
  source: {
    github: 'antfu/vite-plugin-inspect',
    npm: '@vinxi/vite-plugin-inspect',
  },
  stats: {
    stars: 1698,
    downloads: {
      monthly: 933,
      weekly: 165,
    },
  },
})
