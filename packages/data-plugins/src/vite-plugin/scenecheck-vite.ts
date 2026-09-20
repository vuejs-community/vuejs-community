import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@scenecheck/vite',
  description: 'Vite plugin for SceneCheck that instruments scene provider source locations for the DevTools inspector.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'three.js',
    '3d',
    'scenecheck',
  ],
  links: {
    github: 'https://github.com/ycy-0510/scenecheck',
    npm: 'https://www.npmjs.com/package/@scenecheck/vite',
    website: 'https://github.com/ycy-0510/scenecheck#readme',
  },
  source: {
    github: 'ycy-0510/scenecheck',
    npm: '@scenecheck/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 149,
      weekly: 5,
    },
  },
})
