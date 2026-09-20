import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vgpu/wgsl',
  description: 'WGSL shader compilation, runtime resolution, and webpack/vite loaders for vgpu.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webgpu',
    'graphics',
    'rendering',
    'wgsl',
    'shader',
    'webpack-loader',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vercel-labs/vgpu',
    npm: 'https://www.npmjs.com/package/@vgpu/wgsl',
    website: 'https://vgpu.sh',
  },
  source: {
    github: 'vercel-labs/vgpu',
    npm: '@vgpu/wgsl',
  },
  stats: {
    stars: 2157,
    downloads: {
      monthly: 184538,
      weekly: 76586,
    },
  },
})
