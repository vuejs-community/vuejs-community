import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-replace',
  description: 'A universal bundler plugin which replaces targeted strings in files.',
  icon: 'icon:dark-unplugin',
  version: '0.9.0',
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
    github: 'unplugin/unplugin-replace',
    npm: 'unplugin-replace',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-replace',
    npm: 'https://www.npmjs.com/package/unplugin-replace',
  },
  stats: {
    downloads: {
      monthly: 17978,
      weekly: 4929,
    },
  },
})
