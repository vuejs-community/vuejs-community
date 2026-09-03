import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ttsc/unplugin',
  description: 'Bundler adapters for ttsc plugins.',
  version: '0.28.5',
  category: 'plugin',
  tags: [
    'ttsc',
    'unplugin',
    'vite',
    'esbuild',
    'rollup',
    'webpack',
    'typescript',
    'tsgo',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/samchon/ttsc',
    npm: 'https://www.npmjs.com/package/@ttsc/unplugin',
  },
  stats: {
    downloads: {
      monthly: 15650,
      weekly: 2269,
    },
  },
})
