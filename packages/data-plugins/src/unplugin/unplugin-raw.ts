import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-raw',
  description: 'Transform file to a default-export string.',
  icon: 'icon:dark-unplugin',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'unplugin/unplugin-raw',
    npm: 'unplugin-raw',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-raw',
    npm: 'https://www.npmjs.com/package/unplugin-raw',
  },
  stats: {
    downloads: {
      monthly: 51267,
      weekly: 13335,
    },
  },
})
