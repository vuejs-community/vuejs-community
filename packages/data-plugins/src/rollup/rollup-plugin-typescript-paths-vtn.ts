import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-paths-vtn',
  description: 'Rollup Plugin to automatically resolve path aliases set in the compilerOptions section of tsconfig.json.',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
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
