import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dts-build',
  description: 'Fast .d.ts builds for Vite (worker + incremental) with optional dual ESM/CJS support.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'black7375/vite-plugin-dts-build',
    npm: 'vite-plugin-dts-build',
  },
  links: {
    github: 'https://github.com/black7375/vite-plugin-dts-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-dts-build',
    website: 'https://github.com/black7375/vite-plugin-dts-build#readme',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 2490,
      weekly: 380,
    },
  },
})
