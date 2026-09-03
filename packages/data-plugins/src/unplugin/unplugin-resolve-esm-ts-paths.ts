import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-resolve-esm-ts-paths',
  description: 'Resolve `import` and `export` expressions using the TSConfig `paths` and `baseUrl`. This was made to be used on Node environments where you need to have relative imports and most transpile tools (even `tsc` itself) doesn\'t change imports.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'imports',
    'paths',
    'esm',
    'ts',
    'unplugin',
    'esbuild',
    'vite',
    'webpack',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/gympass/unplugins',
    npm: 'https://www.npmjs.com/package/unplugin-resolve-esm-ts-paths',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 13,
    },
  },
})
