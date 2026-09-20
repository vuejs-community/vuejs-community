import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@renderlayer/rollup-shader-chunks',
  description: 'Rollup plugin for optimising inline GLSL',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'renderlayer',
    'rollup-plugin',
    'glsl',
    'plugin',
  ],
  links: {
    github: 'https://github.com/renderlayer/rollup-shader-chunks',
    npm: 'https://www.npmjs.com/package/@renderlayer/rollup-shader-chunks',
    website: 'https://github.com/renderlayer/rollup-shader-chunks#readme',
  },
  source: {
    github: 'renderlayer/rollup-shader-chunks',
    npm: '@renderlayer/rollup-shader-chunks',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 28,
      weekly: 5,
    },
  },
})
