import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shader-languages',
  description: 'Shader languages for Vite. GLSL and WGSL imports with #include resolution, hot reload, minification and end-to-end type safety.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'ubugeeei-prod/vite-plugin-shader-languages',
    npm: 'vite-plugin-shader-languages',
  },
  links: {
    github: 'https://github.com/ubugeeei-prod/vite-plugin-shader-languages',
    npm: 'https://www.npmjs.com/package/vite-plugin-shader-languages',
    website: 'https://github.com/ubugeeei-prod/vite-plugin-shader-languages#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
