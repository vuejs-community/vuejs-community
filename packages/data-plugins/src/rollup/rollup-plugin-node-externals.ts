import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-externals',
  description: 'Automatically declare NodeJS built-in modules and npm dependencies as \'external\' in Rollup/Vite config',
  icon: 'logos:rollupjs',
  version: '9.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'vite',
    'plugin',
    'rollup-plugin',
    'vite-plugin',
    'external',
    'externals',
    'node',
    'builtin',
    'builtins',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
    'modules',
    'monorepo',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Septh/rollup-plugin-node-externals',
    npm: 'rollup-plugin-node-externals',
  },
  links: {
    github: 'https://github.com/Septh/rollup-plugin-node-externals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-externals',
  },
  stats: {
    downloads: {
      monthly: 1124265,
      weekly: 240336,
    },
  },
})
