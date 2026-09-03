import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pure',
  description: 'Annotate functions as pure for Rollup, Vite, esbuild, and rspack',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'vite',
    'unplugin',
    'esbuild',
    'rspack',
    'rollup',
    'pure-annotation',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/justin-schroeder/unplugin-pure',
    npm: 'https://www.npmjs.com/package/unplugin-pure',
  },
  stats: {
    downloads: {
      monthly: 350,
      weekly: 83,
    },
  },
})
