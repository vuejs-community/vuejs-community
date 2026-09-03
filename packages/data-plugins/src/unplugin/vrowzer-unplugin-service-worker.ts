import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vrowzer/unplugin-service-worker',
  description: 'unplugin for @vrowzer/service-worker',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'service-worker',
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
    'farm',
    'bun',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/kazupon/vrowzer',
    npm: 'https://www.npmjs.com/package/@vrowzer/unplugin-service-worker',
  },
  stats: {
    downloads: {
      monthly: 739,
      weekly: 195,
    },
  },
})
