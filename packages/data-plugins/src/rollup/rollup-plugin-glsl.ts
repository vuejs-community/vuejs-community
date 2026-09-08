import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-glsl',
  description: 'Converts GLSL shader source files to modules',
  icon: 'logos:rollupjs',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'glsl',
    'shader',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'vwochnik/rollup-plugin-glsl',
    npm: 'rollup-plugin-glsl',
  },
  links: {
    github: 'https://github.com/vwochnik/rollup-plugin-glsl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-glsl',
  },
  stats: {
    downloads: {
      monthly: 16266,
      weekly: 2918,
    },
  },
})
