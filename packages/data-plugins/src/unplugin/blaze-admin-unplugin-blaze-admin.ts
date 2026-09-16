import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@blaze-admin/unplugin-blaze-admin',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'blaze-admin',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'plugin',
  ],
  source: {
    npm: '@blaze-admin/unplugin-blaze-admin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@blaze-admin/unplugin-blaze-admin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
