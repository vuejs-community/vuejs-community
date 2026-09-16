import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-uglify',
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
  source: {
    github: 'TrySound/rollup-plugin-uglify',
    npm: 'rollup-plugin-uglify',
  },
  links: {
    github: 'https://github.com/TrySound/rollup-plugin-uglify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-uglify',
  },
  stats: {
    stars: 260,
    downloads: {
      monthly: 385822,
      weekly: 65827,
    },
  },
})
