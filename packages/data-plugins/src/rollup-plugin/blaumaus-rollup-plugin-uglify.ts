import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@blaumaus/rollup-plugin-uglify',
  description: 'Rollup plugin to minify generated bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify',
    'minify',
  ],
  links: {
    github: 'https://github.com/Blaumaus/rollup-plugin-uglify',
    npm: 'https://www.npmjs.com/package/@blaumaus/rollup-plugin-uglify',
    website: 'https://github.com/Blaumaus/rollup-plugin-uglify#readme',
  },
  source: {
    github: 'Blaumaus/rollup-plugin-uglify',
    npm: '@blaumaus/rollup-plugin-uglify',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 208,
      weekly: 22,
    },
  },
})
