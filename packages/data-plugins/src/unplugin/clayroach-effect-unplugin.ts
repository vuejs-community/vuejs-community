import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@clayroach/effect-unplugin',
  description: 'Build-time AST transformer for Effect source location tracing',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'typescript',
    'effect',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/clayroach/effect',
    npm: 'https://www.npmjs.com/package/@clayroach/effect-unplugin',
    website: 'https://github.com/clayroach/effect',
  },
  source: {
    github: 'clayroach/effect',
    npm: '@clayroach/effect-unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 1,
    },
  },
})
