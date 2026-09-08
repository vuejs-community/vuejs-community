import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lygia-resolver',
  description: 'Convenient way to import GLSL shaders from Lygia library at build time',
  icon: 'logos:vite-icon',
  version: '1.4.2',
  category: 'plugin',
  tags: [
    'lygia',
    'vite',
    'glsl',
    'webgl',
    'webgpu',
    'vitejs',
    'plugin',
    'threejs',
    'shaders',
    'vite-plugin',
    'glsl-shaders',
    'webgl-shaders',
    'webgpu-shaders',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Nek/vite-plugin-lygia',
    npm: 'vite-plugin-lygia-resolver',
  },
  links: {
    github: 'https://github.com/Nek/vite-plugin-lygia',
    npm: 'https://www.npmjs.com/package/vite-plugin-lygia-resolver',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 12,
    },
  },
})
