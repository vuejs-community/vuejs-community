import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-drop',
  description: 'V43 drag-and-drop plugin for Vite — drop GLTF/GLB files into the browser to scaffold systems',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'drop',
  ],
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin-drop',
  },
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-drop',
    website: 'https://github.com/drawcall-ai/v43#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
