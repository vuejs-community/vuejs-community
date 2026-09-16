import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-essor',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'essor',
    'estjs',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'estjs/essor',
    npm: 'unplugin-essor',
  },
  links: {
    github: 'https://github.com/estjs/essor',
    npm: 'https://www.npmjs.com/package/unplugin-essor',
    website: 'https://github.com/estjs/essor#readme',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 756,
      weekly: 172,
    },
  },
})
