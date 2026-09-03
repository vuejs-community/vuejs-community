import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@scenecheck/vite',
  description: 'Vite plugin for SceneCheck that instruments scene provider source locations for the DevTools inspector.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'three.js',
    '3d',
    'scenecheck',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ycy-0510/scenecheck',
    npm: 'https://www.npmjs.com/package/@scenecheck/vite',
  },
  stats: {
    downloads: {
      monthly: 141,
      weekly: 6,
    },
  },
})
