import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-replace',
  description: 'A universal bundler plugin which replaces targeted strings in files.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  source: {
    github: 'unplugin/unplugin-replace',
    npm: 'unplugin-replace',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-replace',
    npm: 'https://www.npmjs.com/package/unplugin-replace',
    website: 'https://github.com/unplugin/unplugin-replace#readme',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 16643,
      weekly: 2053,
    },
  },
})
