import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-jsdelivr',
  description: 'Generate a bundle using the [jsDelivr CDN](https://www.jsdelivr.com/) to host the external dependencies.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'jsdelivr',
    'transform',
    'cdn',
  ],
  source: {
    npm: 'unplugin-jsdelivr',
  },
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-jsdelivr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 9,
    },
  },
})
