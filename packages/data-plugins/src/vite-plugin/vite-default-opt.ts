import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-default-opt',
  description: 'A Vite plugin that rebinds default imports through a CJS/ESM interop fallback using an AST transform, with source maps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'esm',
    'commonjs',
    'interop',
    'default-import',
  ],
  links: {
    github: 'https://github.com/erikchan1000/vite-default-opt-plugin',
    npm: 'https://www.npmjs.com/package/vite-default-opt',
    website: 'https://github.com/erikchan1000/vite-default-opt-plugin#readme',
  },
  source: {
    github: 'erikchan1000/vite-default-opt-plugin',
    npm: 'vite-default-opt',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
