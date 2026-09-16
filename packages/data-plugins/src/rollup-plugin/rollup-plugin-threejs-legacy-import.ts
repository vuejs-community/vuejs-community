import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-threejs-legacy-import',
  description: 'A Rollup plugin to transform Three.js legacy files (non ES6 modules) to ES6 modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'three.js',
    'transform',
  ],
  source: {
    github: 'rollup/rollup-plugin-legacy',
    npm: 'rollup-plugin-threejs-legacy-import',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-legacy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-threejs-legacy-import',
    website: 'https://github.com/tiborsaas/rollup-plugin-threejs-legacy-import#README',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 28,
      weekly: 3,
    },
  },
})
