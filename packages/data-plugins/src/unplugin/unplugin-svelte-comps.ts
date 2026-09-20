import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svelte-comps',
  description: 'On-demand Svelte 5 components auto-importing',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'esbuild',
    'rolldown',
    'rollup',
    'rspack',
    'svelte',
    'unplugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/utakotoba/unplugin-svelte-comps',
    npm: 'https://www.npmjs.com/package/unplugin-svelte-comps',
    website: 'https://github.com/utakotoba/unplugin-svelte-comps#readme',
  },
  source: {
    github: 'utakotoba/unplugin-svelte-comps',
    npm: 'unplugin-svelte-comps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
