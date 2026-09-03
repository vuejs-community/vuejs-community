import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@clayroach/effect-unplugin',
  description: 'Build-time AST transformer for Effect source location tracing',
  version: '4.0.0-effect4-transformer.1',
  category: 'plugin',
  tags: [
    'typescript',
    'effect',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/clayroach/effect',
    npm: 'https://www.npmjs.com/package/@clayroach/effect-unplugin',
  },
  stats: {
    downloads: {
      monthly: 63,
      weekly: 4,
    },
  },
})
