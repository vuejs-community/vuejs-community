import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-legacy',
  description: 'A universal bundler plugin which adds export declarations to legacy non-module scripts.',
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
    'transform',
  ],
  source: {
    github: 'wzc520pyfm/unplugin-legacy',
    npm: 'unplugin-legacy',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-legacy',
    npm: 'https://www.npmjs.com/package/unplugin-legacy',
    website: 'https://github.com/wzc520pyfm/unplugin-legacy#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
