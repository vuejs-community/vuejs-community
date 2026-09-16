import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-resolve-esm-ts-paths',
  description: 'Resolve `import` and `export` expressions using the TSConfig `paths` and `baseUrl`. This was made to be used on Node environments where you need to have relative imports and most transpile tools (even `tsc` itself) doesn\'t change imports.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'gympass/unplugins',
    npm: 'unplugin-resolve-esm-ts-paths',
  },
  links: {
    github: 'https://github.com/gympass/unplugins',
    npm: 'https://www.npmjs.com/package/unplugin-resolve-esm-ts-paths',
    website: 'https://github.com/gympass/unplugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 64,
      weekly: 10,
    },
  },
})
