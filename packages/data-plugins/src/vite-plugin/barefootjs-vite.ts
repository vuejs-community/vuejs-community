import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@barefootjs/vite',
  description: 'Vite plugin for BarefootJS: Vite/Rollup owns bundling, hashing, chunking, tree-shaking and minification of client assets, BarefootJS keeps only the JSX to (template, client JS) compile',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'barefoot',
    'ssr',
  ],
  links: {
    github: 'https://github.com/piconic-ai/barefootjs',
    npm: 'https://www.npmjs.com/package/@barefootjs/vite',
    website: 'https://github.com/piconic-ai/barefootjs#readme',
  },
  source: {
    github: 'piconic-ai/barefootjs',
    npm: '@barefootjs/vite',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 2909,
      weekly: 1118,
    },
  },
})
