import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-styles',
  description: 'Bundles and compresses all CSS files into a single optimized CSS file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/kieranwv/vite-plugin-bundle-styles',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-styles',
    website: 'https://github.com/kieranwv/vite-plugin-bundle-styles#readme',
  },
  source: {
    github: 'kieranwv/vite-plugin-bundle-styles',
    npm: 'vite-plugin-bundle-styles',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
