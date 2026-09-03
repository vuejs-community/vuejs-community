import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-jsdelivr',
  description: 'Generate a bundle using the [jsDelivr CDN](https://www.jsdelivr.com/) to host the external dependencies.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'jsdelivr',
    'transform',
    'cdn',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-jsdelivr',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
