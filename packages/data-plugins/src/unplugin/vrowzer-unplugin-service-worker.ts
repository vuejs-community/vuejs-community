import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vrowzer/unplugin-service-worker',
  description: 'unplugin for @vrowzer/service-worker',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/kazupon/vrowzer',
    npm: 'https://www.npmjs.com/package/@vrowzer/unplugin-service-worker',
    website: 'https://github.com/kazupon/vrowzer/tree/main/packages/unplugin-service-worker#readme',
  },
  source: {
    github: 'kazupon/vrowzer',
    npm: '@vrowzer/unplugin-service-worker',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 729,
      weekly: 281,
    },
  },
})
