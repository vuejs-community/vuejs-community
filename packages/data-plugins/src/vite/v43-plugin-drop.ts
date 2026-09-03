import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-drop',
  description: 'V43 drag-and-drop plugin for Vite — drop GLTF/GLB files into the browser to scaffold systems',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'drop',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-drop',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
