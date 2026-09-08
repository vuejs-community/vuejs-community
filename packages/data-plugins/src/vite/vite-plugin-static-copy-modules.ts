import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-copy-modules',
  description: 'Use vite-plugin-static-copy to copy node_modules files for serving',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'elisherer/vite-plugin-static-copy-modules',
    npm: 'vite-plugin-static-copy-modules',
  },
  links: {
    github: 'https://github.com/elisherer/vite-plugin-static-copy-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-copy-modules',
  },
  stats: {
    downloads: {
      monthly: 97,
      weekly: 7,
    },
  },
})
