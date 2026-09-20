import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@shader3d/vite-plugin',
  description: 'Vite plugin for Shader3D with HMR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'shader',
    'webgpu',
    'vite',
    'vite-plugin',
    'hmr',
    'graphics',
  ],
  links: {
    github: 'https://github.com/shader3d/shader3d',
    npm: 'https://www.npmjs.com/package/@shader3d/vite-plugin',
    website: 'https://shader3d.dev',
  },
  source: {
    github: 'shader3d/shader3d',
    npm: '@shader3d/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 3,
    },
  },
})
