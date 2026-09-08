import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-obfuscate-glsl',
  description: 'Vite plugin to obfuscate GLSL shaders using laurentlb/Shader_Minifier',
  icon: 'logos:vite-icon',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'glsl',
    'shader',
    'minifier',
    'obfuscator',
    'webgl',
    'threejs',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'epascal/vite-plugin-obfuscate-glsl',
    npm: 'vite-plugin-obfuscate-glsl',
  },
  links: {
    github: 'https://github.com/epascal/vite-plugin-obfuscate-glsl',
    npm: 'https://www.npmjs.com/package/vite-plugin-obfuscate-glsl',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
