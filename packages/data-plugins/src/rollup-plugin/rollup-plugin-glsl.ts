import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-glsl',
  description: 'Converts GLSL shader source files to modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'glsl',
    'shader',
  ],
  links: {
    github: 'https://github.com/vwochnik/rollup-plugin-glsl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-glsl',
    website: 'https://github.com/vwochnik/rollup-plugin-glsl',
  },
  source: {
    github: 'vwochnik/rollup-plugin-glsl',
    npm: 'rollup-plugin-glsl',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 16226,
      weekly: 2612,
    },
  },
})
