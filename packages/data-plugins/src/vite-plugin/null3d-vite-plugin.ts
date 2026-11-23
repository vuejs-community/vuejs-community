import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@null3d/vite-plugin',
  description: 'Vite plugin for null3D projects: cross-origin isolation headers, HTTPS for testing on phones and tablets, WGSL compiled for WebGPU and WebGL2, glTF models optimized on import, and production builds that compile the sketch module and ship the engine core.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'null3d',
    'vite-plugin',
    'wgsl',
    'webgpu',
    'webgl2',
  ],
  links: {
    github: 'https://github.com/null3d-engine/null3d',
    npm: 'https://www.npmjs.com/package/@null3d/vite-plugin',
    website: 'https://github.com/null3d-engine/null3d#readme',
  },
  source: {
    github: 'null3d-engine/null3d',
    npm: '@null3d/vite-plugin',
  },
})
