import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@shinjinseop/page-dep-map-vite-plugin',
  description: 'Vite plugin that injects the page-dep-map inspect helper into the host app during dev',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'inspect',
    'page-dep-map',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yeo11200/page-dep-map',
    npm: 'https://www.npmjs.com/package/@shinjinseop/page-dep-map-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
