import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-glslx',
  description: 'Import GLSL/GLSLX files.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'glsl',
    'glslx',
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'anotherzxx/rollup-plugin-glslx',
    npm: 'rollup-plugin-glslx',
  },
  links: {
    github: 'https://github.com/anotherzxx/rollup-plugin-glslx',
    npm: 'https://www.npmjs.com/package/rollup-plugin-glslx',
    website: 'https://github.com/anotherzxx/rollup-plugin-glslx#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
