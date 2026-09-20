import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vuemap/rollup-plugin-glslify',
  description: 'Import GLSL strings with glslify',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'glsl',
    'glslify',
    'shaders',
  ],
  links: {
    github: 'https://github.com/glslify/rollup-plugin-glslify',
    npm: 'https://www.npmjs.com/package/@vuemap/rollup-plugin-glslify',
    website: 'https://github.com/glslify/rollup-plugin-glslify#readme',
  },
  source: {
    github: 'glslify/rollup-plugin-glslify',
    npm: '@vuemap/rollup-plugin-glslify',
  },
  stats: {
    stars: 58,
    downloads: {
      monthly: 34,
      weekly: 6,
    },
  },
})
