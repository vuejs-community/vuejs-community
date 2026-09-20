import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wgsl-obfuscate',
  description: 'Vite plugin to obfuscate WGSL shader source in production builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wgsl',
    'webgpu',
    'obfuscation',
    'minification',
    'shader',
  ],
  links: {
    github: 'https://github.com/soaringred/vite-plugin-wgsl-obfuscate',
    npm: 'https://www.npmjs.com/package/vite-plugin-wgsl-obfuscate',
    website: 'https://github.com/soaringred/vite-plugin-wgsl-obfuscate#readme',
  },
  source: {
    github: 'soaringred/vite-plugin-wgsl-obfuscate',
    npm: 'vite-plugin-wgsl-obfuscate',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
