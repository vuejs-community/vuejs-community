import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-mtl',
  description: 'Import .mtl files as strings 🧵 in Vite, Rollup, Webpack + more',
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
    'transform',
    'three.js',
    'svelte-cubed',
    'mtl',
    'mtl-loader',
    'mtl-file',
  ],
  links: {
    github: 'https://github.com/cryptodeal/unplugin-mtl',
    npm: 'https://www.npmjs.com/package/unplugin-mtl',
    website: 'https://github.com/cryptodeal/unplugin-mtl#readme',
  },
  source: {
    github: 'cryptodeal/unplugin-mtl',
    npm: 'unplugin-mtl',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 52,
      weekly: 15,
    },
  },
})
