import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tingyun-common/vite-plugin-source-map',
  description: 'tingyun sourcemap plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tingyun',
    'tingyun-cli',
    'source-map',
    'vite-plugin',
  ],
  source: {
    npm: '@tingyun-common/vite-plugin-source-map',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tingyun-common/vite-plugin-source-map',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
