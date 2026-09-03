import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-three-minify',
  description: 'Minify Three.js shader code, and remove redundant code',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rolldown-plugin',
    'vite-plugin',
    'three',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/brybrant/rollup-plugin-three-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-three-minify',
  },
  stats: {
    downloads: {
      monthly: 65,
      weekly: 3,
    },
  },
})
