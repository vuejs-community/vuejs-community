import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@renderlayer/rollup-shader-chunks',
  description: 'Rollup plugin for optimising inline GLSL',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'renderlayer',
    'rollup-plugin',
    'glsl',
    'plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/renderlayer/rollup-shader-chunks',
    npm: 'https://www.npmjs.com/package/@renderlayer/rollup-shader-chunks',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 8,
    },
  },
})
