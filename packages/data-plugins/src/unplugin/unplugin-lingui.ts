import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lingui',
  description: 'unplugin for lingui',
  icon: 'icon:dark-unplugin',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'lingui',
    'unplugin',
    'vite',
    'lingui-loader',
    'esbuild',
    'rolldown',
    'rollup',
    'rspack',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'Debbl/unplugin-lingui',
    npm: 'unplugin-lingui',
  },
  links: {
    github: 'https://github.com/Debbl/unplugin-lingui',
    npm: 'https://www.npmjs.com/package/unplugin-lingui',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 4,
    },
  },
})
