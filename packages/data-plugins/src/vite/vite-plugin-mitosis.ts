import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mitosis',
  description: 'Vite plugin to import JSX components to different UI frameworks',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mitosis',
    'jsx',
    'tsx',
    'svelte',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'az33zy/vite-plugin-mitosis',
    npm: 'vite-plugin-mitosis',
  },
  links: {
    github: 'https://github.com/az33zy/vite-plugin-mitosis',
    npm: 'https://www.npmjs.com/package/vite-plugin-mitosis',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
