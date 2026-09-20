import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-obfuscate-glsl',
  description: 'Vite plugin to obfuscate GLSL shaders using laurentlb/Shader_Minifier',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/epascal/vite-plugin-obfuscate-glsl',
    npm: 'https://www.npmjs.com/package/vite-plugin-obfuscate-glsl',
    website: 'https://github.com/epascal/vite-plugin-obfuscate-glsl',
  },
  source: {
    github: 'epascal/vite-plugin-obfuscate-glsl',
    npm: 'vite-plugin-obfuscate-glsl',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
