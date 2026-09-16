import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fg-unplugin-auto-import',
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
  source: {
    github: 'unplugin/unplugin-auto-import',
    npm: 'fg-unplugin-auto-import',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/fg-unplugin-auto-import',
    website: 'https://github.com/unplugin/unplugin-auto-import#readme',
  },
  stats: {
    stars: 3797,
    downloads: {
      monthly: 31,
      weekly: 3,
    },
  },
})
