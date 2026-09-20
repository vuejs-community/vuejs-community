import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-three-minify',
  description: 'Minify Three.js shader code, and remove redundant code',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rolldown-plugin',
    'vite-plugin',
    'three',
    'minify',
  ],
  links: {
    github: 'https://github.com/brybrant/rollup-plugin-three-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-three-minify',
    website: 'https://github.com/brybrant/rollup-plugin-three-minify#readme',
  },
  source: {
    github: 'brybrant/rollup-plugin-three-minify',
    npm: 'rollup-plugin-three-minify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 9,
    },
  },
})
