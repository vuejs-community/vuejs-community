import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vuemap/rollup-plugin-glslify',
  description: 'Import GLSL strings with glslify',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'glsl',
    'glslify',
    'shaders',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/glslify/rollup-plugin-glslify',
    npm: 'https://www.npmjs.com/package/@vuemap/rollup-plugin-glslify',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 13,
    },
  },
})
