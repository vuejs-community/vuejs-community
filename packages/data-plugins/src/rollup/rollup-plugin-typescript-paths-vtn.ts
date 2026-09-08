import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-paths-vtn',
  description: 'Rollup Plugin to automatically resolve path aliases set in the compilerOptions section of tsconfig.json.',
  icon: 'logos:rollupjs',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'simonhaenisch/rollup-plugin-typescript-paths',
    npm: 'rollup-plugin-typescript-paths-vtn',
  },
  links: {
    github: 'https://github.com/simonhaenisch/rollup-plugin-typescript-paths',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-paths-vtn',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 4,
    },
  },
})
