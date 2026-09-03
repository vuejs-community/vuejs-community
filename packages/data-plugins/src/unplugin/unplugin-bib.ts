import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-bib',
  description: 'Import .bib files as strings 🧵 in Vite, Rollup, Webpack + more',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'three.js',
    'svelte-cubed',
    'bib',
    'bib-loader',
    'bib-file',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/tonyketcham/unplugin-bib',
    npm: 'https://www.npmjs.com/package/unplugin-bib',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
