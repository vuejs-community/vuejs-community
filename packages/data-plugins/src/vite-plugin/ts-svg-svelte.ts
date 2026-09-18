import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ts-svg/svelte',
  description: 'Vite Plugin for loading all svg files inside a folder with types.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'svg',
    'typescript',
    'svelte',
  ],
  source: {
    github: 'raycnwong/ts-svg',
    npm: '@ts-svg/svelte',
  },
  links: {
    github: 'https://github.com/raycnwong/ts-svg',
    npm: 'https://www.npmjs.com/package/@ts-svg/svelte',
    website: 'https://github.com/raycnwong/ts-svg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 200,
      weekly: 13,
    },
  },
})
