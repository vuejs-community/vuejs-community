import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dts-build',
  description: 'Fast .d.ts builds for Vite (worker + incremental) with optional dual ESM/CJS support.',
  icon: 'logos:vite-icon',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'dts',
    'typescript',
    'tsc',
    'build',
    'incremental',
    'worker-thread',
    'performance',
    'declaration',
    'types',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'black7375/vite-plugin-dts-build',
    npm: 'vite-plugin-dts-build',
  },
  links: {
    github: 'https://github.com/black7375/vite-plugin-dts-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-dts-build',
  },
  stats: {
    downloads: {
      monthly: 2738,
      weekly: 747,
    },
  },
})
