import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wgsl-obfuscate',
  description: 'Vite plugin to obfuscate WGSL shader source in production builds',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'soaringred/vite-plugin-wgsl-obfuscate',
    npm: 'vite-plugin-wgsl-obfuscate',
  },
  links: {
    github: 'https://github.com/soaringred/vite-plugin-wgsl-obfuscate',
    npm: 'https://www.npmjs.com/package/vite-plugin-wgsl-obfuscate',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
