import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datarose/rollup-plugin-minify',
  description: 'Rollup plugin to minify or clean up generated bundles using esbuild',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'minify',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/datarose-net/rollup-plugin-minify',
    npm: 'https://www.npmjs.com/package/@datarose/rollup-plugin-minify',
    website: 'https://github.com/datarose-net/rollup-plugin-minify#readme',
  },
  source: {
    github: 'datarose-net/rollup-plugin-minify',
    npm: '@datarose/rollup-plugin-minify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
