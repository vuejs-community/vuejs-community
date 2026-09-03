import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shader-languages',
  description: 'Shader languages for Vite. GLSL and WGSL imports with #include resolution, hot reload, minification and end-to-end type safety.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'glsl',
    'hmr',
    'shader',
    'shading-language',
    'vite',
    'vite-plugin',
    'webgl',
    'webgpu',
    'wgsl',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ubugeeei-prod/vite-plugin-shader-languages',
    npm: 'https://www.npmjs.com/package/vite-plugin-shader-languages',
  },
  stats: {
    downloads: {
      monthly: 291,
      weekly: 7,
    },
  },
})
