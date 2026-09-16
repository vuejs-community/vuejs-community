import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-isolated-decl',
  description: 'A blazing-fast tool for generating isolated declarations.',
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
    github: 'unplugin/unplugin-isolated-decl',
    npm: 'unplugin-isolated-decl',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-isolated-decl',
    npm: 'https://www.npmjs.com/package/unplugin-isolated-decl',
    website: 'https://github.com/unplugin/unplugin-isolated-decl#readme',
  },
  stats: {
    stars: 193,
    downloads: {
      monthly: 151886,
      weekly: 24351,
    },
  },
})
