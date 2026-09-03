import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-copy-modules',
  description: 'Use vite-plugin-static-copy to copy node_modules files for serving',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'monaco',
    'mermaid',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/elisherer/vite-plugin-static-copy-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-copy-modules',
  },
  stats: {
    downloads: {
      monthly: 106,
      weekly: 8,
    },
  },
})
