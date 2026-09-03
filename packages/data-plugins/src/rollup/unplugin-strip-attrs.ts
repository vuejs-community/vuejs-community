import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strip-attrs',
  description: 'Strip test-related attributes like data-testid and data-cy from JSX, Vue, Svelte, and HTML at build time.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'data-cy',
    'data-testid',
    'esbuild-plugin',
    'jsx',
    'rollup-plugin',
    'rspack-plugin',
    'strip-attrs',
    'svelte',
    'unplugin',
    'vite-plugin',
    'vue',
    'webpack-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ntnyq/unplugin-strip-attrs',
    npm: 'https://www.npmjs.com/package/unplugin-strip-attrs',
  },
  stats: {
    downloads: {
      monthly: 212,
      weekly: 16,
    },
  },
})
