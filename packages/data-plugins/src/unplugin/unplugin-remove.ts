import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-remove',
  description: 'Plugin to remove console.xx and debugger for Vite & Webpack & Esbuild & Rollup',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'rspack',
    'rolldown',
    'transform',
    'remove debugger',
    'remove console',
    'console',
    'debugger',
  ],
  links: {
    github: 'https://github.com/Talljack/unplugin-remove',
    npm: 'https://www.npmjs.com/package/unplugin-remove',
    website: 'https://github.com/Talljack/unplugin-remove#readme',
  },
  source: {
    github: 'Talljack/unplugin-remove',
    npm: 'unplugin-remove',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 567057,
      weekly: 109050,
    },
  },
})
