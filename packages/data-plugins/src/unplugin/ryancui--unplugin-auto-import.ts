import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ryancui-/unplugin-auto-import',
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
    npm: '@ryancui-/unplugin-auto-import',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/@ryancui-/unplugin-auto-import',
    website: 'https://github.com/unplugin/unplugin-auto-import#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
