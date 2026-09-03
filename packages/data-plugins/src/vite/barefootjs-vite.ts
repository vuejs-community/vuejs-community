import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@barefootjs/vite',
  description: 'Vite plugin for BarefootJS: Vite/Rollup owns bundling, hashing, chunking, tree-shaking and minification of client assets, BarefootJS keeps only the JSX to (template, client JS) compile',
  version: '0.33.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'barefoot',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/piconic-ai/barefootjs',
    npm: 'https://www.npmjs.com/package/@barefootjs/vite',
  },
  stats: {
    downloads: {
      monthly: 2566,
      weekly: 759,
    },
  },
})
