import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-shader-chunks',
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
  source: {
    github: 'epreston/rollup-shader-chunks',
    npm: 'rollup-shader-chunks',
  },
  links: {
    github: 'https://github.com/epreston/rollup-shader-chunks',
    npm: 'https://www.npmjs.com/package/rollup-shader-chunks',
    website: 'https://github.com/epreston/rollup-shader-chunks#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 64,
      weekly: 4,
    },
  },
})
