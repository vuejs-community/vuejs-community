import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-essor',
  description: '',
  icon: 'icon:dark-unplugin',
  version: '0.0.18-beta.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'essor',
    'estjs',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'estjs/essor',
    npm: 'unplugin-essor',
  },
  links: {
    github: 'https://github.com/estjs/essor',
    npm: 'https://www.npmjs.com/package/unplugin-essor',
  },
  stats: {
    downloads: {
      monthly: 834,
      weekly: 185,
    },
  },
})
