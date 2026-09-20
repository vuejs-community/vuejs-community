import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@codehz/preeval',
  description: 'Publish-build pre-evaluation of imported ESM calls with optional runtime materialization',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/@codehz/preeval',
  },
  source: {
    npm: '@codehz/preeval',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 525,
      weekly: 203,
    },
  },
})
