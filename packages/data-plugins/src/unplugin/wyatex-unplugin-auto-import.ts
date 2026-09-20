import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wyatex/unplugin-auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'astro',
    'webpack',
    'rollup',
    'rspack',
    'auto-import',
    'transform',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/@wyatex/unplugin-auto-import',
    website: 'https://github.com/antfu/unplugin-auto-import#readme',
  },
  source: {
    github: 'antfu/unplugin-auto-import',
    npm: '@wyatex/unplugin-auto-import',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
