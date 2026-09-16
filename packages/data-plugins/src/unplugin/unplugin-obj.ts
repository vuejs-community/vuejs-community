import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-obj',
  description: 'Import .obj files as strings 🧵 in Vite, Rollup, Webpack + more',
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
    'obj',
    'obj-loader',
    'obj-file',
  ],
  source: {
    github: 'tonyketcham/unplugin-obj',
    npm: 'unplugin-obj',
  },
  links: {
    github: 'https://github.com/tonyketcham/unplugin-obj',
    npm: 'https://www.npmjs.com/package/unplugin-obj',
    website: 'https://github.com/tonyketcham/unplugin-obj#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 6157,
      weekly: 948,
    },
  },
})
