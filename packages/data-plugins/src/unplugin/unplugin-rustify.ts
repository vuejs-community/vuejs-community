import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-rustify',
  description: 'Build-time site injection for rustify-ts traces: Vite, Rollup, webpack, esbuild, rspack and Metro.',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  source: {
    github: 'angelozdev/rustify-ts',
    npm: 'unplugin-rustify',
  },
  links: {
    github: 'https://github.com/angelozdev/rustify-ts',
    npm: 'https://www.npmjs.com/package/unplugin-rustify',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 7,
    },
  },
})
