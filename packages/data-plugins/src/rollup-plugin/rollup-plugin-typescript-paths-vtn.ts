import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-paths-vtn',
  description: 'Rollup Plugin to automatically resolve path aliases set in the compilerOptions section of tsconfig.json.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typescript',
  ],
  source: {
    github: 'simonhaenisch/rollup-plugin-typescript-paths',
    npm: 'rollup-plugin-typescript-paths-vtn',
  },
  links: {
    github: 'https://github.com/simonhaenisch/rollup-plugin-typescript-paths',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-paths-vtn',
    website: 'https://github.com/simonhaenisch/rollup-plugin-typescript-paths#readme',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 42,
      weekly: 21,
    },
  },
})
