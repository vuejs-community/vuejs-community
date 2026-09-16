import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mitosis',
  description: 'Vite plugin to import JSX components to different UI frameworks',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mitosis',
    'jsx',
    'tsx',
    'svelte',
  ],
  source: {
    github: 'az33zy/vite-plugin-mitosis',
    npm: 'vite-plugin-mitosis',
  },
  links: {
    github: 'https://github.com/az33zy/vite-plugin-mitosis',
    npm: 'https://www.npmjs.com/package/vite-plugin-mitosis',
    website: 'https://github.com/az33zy/vite-plugin-mitosis#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
