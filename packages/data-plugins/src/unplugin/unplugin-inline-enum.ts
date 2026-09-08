import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inline-enum',
  description: 'Inline enum values to optimize bundle size.',
  icon: 'icon:dark-unplugin',
  version: '0.8.3',
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
    github: 'unplugin/unplugin-inline-enum',
    npm: 'unplugin-inline-enum',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-inline-enum',
    npm: 'https://www.npmjs.com/package/unplugin-inline-enum',
  },
  stats: {
    downloads: {
      monthly: 5110,
      weekly: 858,
    },
  },
})
