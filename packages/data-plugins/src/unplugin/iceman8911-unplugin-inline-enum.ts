import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@iceman8911/unplugin-inline-enum',
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
    npm: '@iceman8911/unplugin-inline-enum',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-inline-enum',
    npm: 'https://www.npmjs.com/package/@iceman8911/unplugin-inline-enum',
    website: 'https://github.com/unplugin/unplugin-inline-enum#readme',
  },
  stats: {
    stars: 55,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
