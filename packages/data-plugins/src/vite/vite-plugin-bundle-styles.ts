import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-styles',
  description: 'Bundles and compresses all CSS files into a single optimized CSS file.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'typescript',
    'vite',
    'plugin',
    'css',
    'bundle',
    'styles',
    'postcss',
    'vite-plugin',
    'sass',
    'scss',
    'less',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kieranwv/vite-plugin-bundle-styles',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-styles',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
