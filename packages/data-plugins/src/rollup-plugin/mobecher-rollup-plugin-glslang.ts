import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mobecher/rollup-plugin-glslang',
  description: 'reads a directory of shaders, compiles them and outputs to another directory',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'mobec/rollup-plugin-glslang',
    npm: '@mobecher/rollup-plugin-glslang',
  },
  links: {
    github: 'https://github.com/mobec/rollup-plugin-glslang',
    npm: 'https://www.npmjs.com/package/@mobecher/rollup-plugin-glslang',
    website: 'https://github.com/mobec/rollup-plugin-glslang#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
