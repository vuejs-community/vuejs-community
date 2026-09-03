import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@codehz/preeval',
  description: 'Publish-build pre-evaluation of imported ESM calls with optional runtime materialization',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'build',
    'bun',
    'const',
    'esbuild',
    'precompute',
    'preeval',
    'rolldown',
    'rollup',
    'unplugin',
    'vite',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@codehz/preeval',
  },
  stats: {
    downloads: {
      monthly: 1713,
      weekly: 30,
    },
  },
})
