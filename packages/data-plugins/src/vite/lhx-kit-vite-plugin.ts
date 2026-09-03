import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lhx-kit/vite-plugin',
  description: 'Vite plugin that translates project.config.ts into MPA build/dev configuration: chunk family grouping, CDN import rewriting, per-page output, local vendor fallback, and predefined gzip + brotli compression.',
  version: '1.1.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/juwenzhang/lhx-kit',
    npm: 'https://www.npmjs.com/package/@lhx-kit/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 6,
    },
  },
})
