import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lygia-resolver',
  description: 'Convenient way to import GLSL shaders from Lygia library at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Nek/vite-plugin-lygia',
    npm: 'vite-plugin-lygia-resolver',
  },
  links: {
    github: 'https://github.com/Nek/vite-plugin-lygia',
    npm: 'https://www.npmjs.com/package/vite-plugin-lygia-resolver',
    website: 'https://github.com/Nek/vite-plugin-lygia#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 4,
    },
  },
})
