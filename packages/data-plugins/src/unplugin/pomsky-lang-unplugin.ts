import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pomsky-lang/unplugin',
  description: 'Use Pomsky along with your JavaScript.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'javascript',
    'typescript',
    'regex',
    'pomsky',
    'rust',
    'vite',
    'esbuild',
    'rollup',
    'webpack',
  ],
  links: {
    github: 'https://github.com/pomsky-lang/unplugin-pomsky',
    npm: 'https://www.npmjs.com/package/@pomsky-lang/unplugin',
    website: 'https://pomsky-lang.org',
  },
  source: {
    github: 'pomsky-lang/unplugin-pomsky',
    npm: '@pomsky-lang/unplugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 62,
      weekly: 9,
    },
  },
})
