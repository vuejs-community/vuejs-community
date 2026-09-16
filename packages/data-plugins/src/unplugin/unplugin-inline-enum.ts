import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inline-enum',
  description: 'Inline enum values to optimize bundle size.',
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
    github: 'unplugin/unplugin-inline-enum',
    npm: 'unplugin-inline-enum',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-inline-enum',
    npm: 'https://www.npmjs.com/package/unplugin-inline-enum',
    website: 'https://github.com/unplugin/unplugin-inline-enum#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4977,
      weekly: 767,
    },
  },
})
