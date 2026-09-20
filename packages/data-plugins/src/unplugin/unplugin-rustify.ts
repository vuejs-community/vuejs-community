import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-rustify',
  description: 'Build-time site injection for rustify-ts traces: Vite, Rollup, webpack, esbuild, rspack and Metro.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'rustify-ts',
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'metro',
    'babel',
    'error-handling',
  ],
  links: {
    github: 'https://github.com/angelozdev/rustify-ts',
    npm: 'https://www.npmjs.com/package/unplugin-rustify',
    website: 'https://github.com/angelozdev/rustify-ts/tree/main/packages/unplugin-rustify#readme',
  },
  source: {
    github: 'angelozdev/rustify-ts',
    npm: 'unplugin-rustify',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
