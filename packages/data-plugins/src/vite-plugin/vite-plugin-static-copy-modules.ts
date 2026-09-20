import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-copy-modules',
  description: 'Use vite-plugin-static-copy to copy node_modules files for serving',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'monaco',
    'mermaid',
  ],
  links: {
    github: 'https://github.com/elisherer/vite-plugin-static-copy-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-copy-modules',
    website: 'https://github.com/elisherer/vite-plugin-static-copy-modules#readme',
  },
  source: {
    github: 'elisherer/vite-plugin-static-copy-modules',
    npm: 'vite-plugin-static-copy-modules',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 69,
      weekly: 19,
    },
  },
})
