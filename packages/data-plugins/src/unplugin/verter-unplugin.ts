import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@verter/unplugin',
  description: 'Universal Verter compiler plugin for Vue and Svelte across Vite, Rollup, webpack, esbuild, and compatible bundlers',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'compiler',
    'rollup',
    'unplugin',
    'vite',
    'vue',
    'svelte',
    'webpack',
  ],
  source: {
    github: 'pikax/verter',
    npm: '@verter/unplugin',
  },
  links: {
    github: 'https://github.com/pikax/verter',
    npm: 'https://www.npmjs.com/package/@verter/unplugin',
    website: 'https://verterjs.dev/',
  },
  stats: {
    stars: 109,
    downloads: {
      monthly: 133,
      weekly: 10,
    },
  },
})
