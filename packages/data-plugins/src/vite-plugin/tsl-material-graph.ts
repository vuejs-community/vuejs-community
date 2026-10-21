import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tsl-material-graph',
  description: 'Visual node editor (Unity Shader Graph style) for Three.js TSL materials, with a runtime that loads graphs saved as JSON.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'three',
    'threejs',
    'tsl',
    'webgpu',
    'shader',
    'shader-graph',
    'node-editor',
    'material',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/tsl-material-graph',
  },
  source: {
    npm: 'tsl-material-graph',
  },
})
