import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mobecher/rollup-plugin-glslang',
  description: 'reads a directory of shaders, compiles them and outputs to another directory',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'plugin',
    'glsl',
    'glslang',
    'shader',
    'shaders',
    'spir-v',
    'spirv',
    'vert',
    'frag',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mobec/rollup-plugin-glslang',
    npm: 'https://www.npmjs.com/package/@mobecher/rollup-plugin-glslang',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 9,
    },
  },
})
