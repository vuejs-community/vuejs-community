import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@shader3d/vite-plugin',
  description: 'Vite plugin for Shader3D with HMR support',
  version: '0.4.25',
  category: 'plugin',
  tags: [
    'shader',
    'webgpu',
    'vite',
    'vite-plugin',
    'hmr',
    'graphics',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/shader3d/shader3d',
    npm: 'https://www.npmjs.com/package/@shader3d/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 13,
    },
  },
})
