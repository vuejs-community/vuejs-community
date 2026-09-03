import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-default-opt',
  description: 'A Vite plugin that rebinds default imports through a CJS/ESM interop fallback using an AST transform, with source maps.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'esm',
    'commonjs',
    'interop',
    'default-import',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/erikchan1000/vite-default-opt-plugin',
    npm: 'https://www.npmjs.com/package/vite-default-opt',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
