import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lhx-kit/vite-plugin',
  description: 'Vite plugin that translates project.config.ts into MPA build/dev configuration: chunk family grouping, CDN import rewriting, per-page output, local vendor fallback, and predefined gzip + brotli compression.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lhx-kit',
    'vite',
    'vite-plugin',
    'mpa',
    'rollup',
    'cdn',
    'brotli',
    'gzip',
    'manualchunks',
  ],
  source: {
    github: 'juwenzhang/lhx-kit',
    npm: '@lhx-kit/vite-plugin',
  },
  links: {
    github: 'https://github.com/juwenzhang/lhx-kit',
    npm: 'https://www.npmjs.com/package/@lhx-kit/vite-plugin',
    website: 'https://juwenzhang.github.io/lhx-kit/runtime/vite-plugin',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
