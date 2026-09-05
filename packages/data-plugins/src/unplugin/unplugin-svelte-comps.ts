import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svelte-comps',
  description: 'On-demand Svelte 5 components auto-importing',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'esbuild',
    'rolldown',
    'rollup',
    'rspack',
    'svelte',
    'unplugin',
    'vite',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/utakotoba/unplugin-svelte-comps',
    npm: 'https://www.npmjs.com/package/unplugin-svelte-comps',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 0,
    },
  },
})
