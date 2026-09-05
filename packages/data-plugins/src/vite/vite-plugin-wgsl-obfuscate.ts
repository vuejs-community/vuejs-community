import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wgsl-obfuscate',
  description: 'Vite plugin to obfuscate WGSL shader source in production builds',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wgsl',
    'webgpu',
    'obfuscation',
    'minification',
    'shader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/soaringred/vite-plugin-wgsl-obfuscate',
    npm: 'https://www.npmjs.com/package/vite-plugin-wgsl-obfuscate',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 0,
    },
  },
})
