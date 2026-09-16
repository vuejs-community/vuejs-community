import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strip-attrs',
  description: 'Strip test-related attributes like data-testid and data-cy from JSX, Vue, Svelte, and HTML at build time.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'ntnyq/unplugin-strip-attrs',
    npm: 'unplugin-strip-attrs',
  },
  links: {
    github: 'https://github.com/ntnyq/unplugin-strip-attrs',
    npm: 'https://www.npmjs.com/package/unplugin-strip-attrs',
    website: 'https://github.com/ntnyq/unplugin-strip-attrs#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 379,
      weekly: 178,
    },
  },
})
