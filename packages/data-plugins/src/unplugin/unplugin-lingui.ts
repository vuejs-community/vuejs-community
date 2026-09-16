import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lingui',
  description: 'unplugin for lingui',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'Debbl/unplugin-lingui',
    npm: 'unplugin-lingui',
  },
  links: {
    github: 'https://github.com/Debbl/unplugin-lingui',
    npm: 'https://www.npmjs.com/package/unplugin-lingui',
    website: 'https://github.com/Debbl/unplugin-lingui#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
