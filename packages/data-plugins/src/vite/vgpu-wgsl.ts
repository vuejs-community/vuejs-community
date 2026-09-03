import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vgpu/wgsl',
  description: 'WGSL shader compilation, runtime resolution, and webpack/vite loaders for vgpu.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'webgpu',
    'graphics',
    'rendering',
    'wgsl',
    'shader',
    'webpack-loader',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vercel-labs/vgpu',
    npm: 'https://www.npmjs.com/package/@vgpu/wgsl',
  },
  stats: {
    downloads: {
      monthly: 83611,
      weekly: 26923,
    },
  },
})
