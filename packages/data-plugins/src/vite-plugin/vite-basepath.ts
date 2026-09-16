import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-basepath',
  description: 'Vite plugin: relative base (./) builds that work in any subdirectory, with runtime path detection for routers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'base',
    'base-path',
    'subfolder',
    'subdirectory',
    'deploy',
    'relative-path',
    'assets',
    'router',
    'basename',
  ],
  source: {
    github: 'Foisalislambd/vite-basepath',
    npm: 'vite-basepath',
  },
  links: {
    github: 'https://github.com/Foisalislambd/vite-basepath',
    npm: 'https://www.npmjs.com/package/vite-basepath',
    website: 'https://github.com/Foisalislambd/vite-basepath#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 4,
    },
  },
})
