import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-copy',
  description: 'Copy files and folders, with glob support.',
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
    'rolldown',
    'rspack',
    'farm',
    'transform',
    'copy',
    'moveFiles',
  ],
  source: {
    github: 'xiankq/unplugin-copy',
    npm: 'unplugin-copy',
  },
  links: {
    github: 'https://github.com/xiankq/unplugin-copy',
    npm: 'https://www.npmjs.com/package/unplugin-copy',
    website: 'https://github.com/xiankq/unplugin-copy#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 74,
      weekly: 20,
    },
  },
})
