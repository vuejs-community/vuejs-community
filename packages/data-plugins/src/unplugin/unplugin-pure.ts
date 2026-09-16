import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pure',
  description: 'Annotate functions as pure for Rollup, Vite, esbuild, and rspack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vite',
    'unplugin',
    'esbuild',
    'rspack',
    'rollup',
    'pure-annotation',
  ],
  source: {
    github: 'justin-schroeder/unplugin-pure',
    npm: 'unplugin-pure',
  },
  links: {
    github: 'https://github.com/justin-schroeder/unplugin-pure',
    npm: 'https://www.npmjs.com/package/unplugin-pure',
    website: 'https://github.com/justin-schroeder/unplugin-pure#readme',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 379,
      weekly: 110,
    },
  },
})
